from __future__ import annotations
from abc import ABC, abstractmethod
from typing import List
import pickle
import numpy as np
import trainedModel.TextPreprocessing as tp
from sklearn.feature_extraction.text import CountVectorizer
from nltk.stem.snowball import SnowballStemmer





# predefined data
modifiedLabels = ['Discussions of Atheism', 'Computer Graphics','Diverse computer operating system (windows)',
              'Personal computer hardware systems (IBM)', 'Computer systems of Macintosh hardware',
              'Computer windows 10', 'Diverse for-sale', 'Automobiles, automotive products and laws',
              'Motorcycles and related products and laws', 'Discussion about baseball', 'Discussion about hockey.',
              'Cryptography science', 'Electronic Science', 'Medicine science', 'Space Science',
              'religion of society (Christianity)', 'Politics talk about guns', 'Politics talk about middle east',
              'Diverse politics talks', 'Diverse religion talks'] 



class StemmedCountVectorizer(CountVectorizer):
    def build_analyzer(self):
        stemmer = SnowballStemmer("english", ignore_stopwords=True)
        analyzer = super(StemmedCountVectorizer, self).build_analyzer()
        return lambda doc: ([stemmer.stem(w) for w in analyzer(doc)])

class Context():
  """
  The Context defines the interface of interest to clients.
  """

  def __init__(self, strategy: Strategy) -> None:
    """
    Usually, the Context accepts a strategy through the constructor, but
    also provides a setter to change it at runtime.
    """

    self._strategy = strategy
    self.textProcess = tp.TextPreprocessing()

  @property
  def strategy(self) -> Strategy:
    """
    The Context maintains a reference to one of the Strategy objects. The
    Context does not know the concrete class of a strategy. It should work
    with all strategies via the Strategy interface.
    """

    return self._strategy

  @strategy.setter
  def strategy(self, strategy: Strategy) -> None:
    """
    Usually, the Context allows replacing a Strategy object at runtime.
    """

    self._strategy = strategy

  def text_preprocessing(self, data):
    for i , _ in enumerate(data):
      data[i] = self.textProcess.prepareData(data[i])
      data[i] = self.textProcess.slang(data[i])
      data[i] = self.textProcess.removeStopWords(data[i])
      data[i] = self.textProcess.stemmAndLemmatization(data[i])
      data[i] = self.textProcess.removepunctuations(data[i])
    return data


  def runModel(self, text, CNN):
    
    # initialize the trained model
    self._strategy.import_model()
    
    # classify the desired text
    modelResult = self.strategy.classify(text, CNN)
    return modelResult

# ...


class TrainedModelStrategy(ABC):
  """
  The Strategy interface declares operations common to all supported versions
  of some algorithm.

  The Context uses this interface to call the algorithm defined by Concrete
  Strategies.
  """

  @abstractmethod
  def import_model(self):
    pass

  @abstractmethod
  def classify(self, text, CNN):
    pass

"""
Concrete Strategies implement the algorithm while following the base Strategy
interface. The interface makes them interchangeable in the Context.
"""


class SVMTrainedModel(TrainedModelStrategy):
  
  model = None

  def import_model(self):
    
    with open('saved_models/SVMModel', 'rb') as training_model:
      SVMModel = pickle.load(training_model)
      print("model has benn loaded")
      self.model = SVMModel


  def classify(self, text, CNN):
    out = self.model.predict(text)
    if(CNN):
        out = np.argmax(out,axis=1)
    return modifiedLabels[out[0]]


class LinearTrainedModel(TrainedModelStrategy):
  
  model = None

  def import_model(self):
    
    with open('saved_models/LinearSVCModel', 'rb') as training_model:
      LinearModel = pickle.load(training_model)
      print("model has benn loaded")
      self.model = LinearModel


  def classify(self, text, CNN):

    out = self.model.predict(text)
    if(CNN):
        out = np.argmax(out,axis=1)
    return modifiedLabels[out[0]]


class RandomForestModel(TrainedModelStrategy):
  
  model = None

  def import_model(self):
    
    with open('saved_models/RandomForestModel', 'rb') as training_model:
      RandomForestModel = pickle.load(training_model)
      print("model has benn loaded")
      self.model = RandomForestModel


  def classify(self, text, CNN):

    out = self.model.predict(text)
    if(CNN):
        out = np.argmax(out,axis=1)
    return modifiedLabels[out[0]]


class NaiveBayesModel(TrainedModelStrategy):
  
  model = None

  def import_model(self):
    
    with open('saved_models/naiveBayesModel', 'rb') as training_model:
      NaiveModel = pickle.load(training_model)
      print("model has benn loaded")
      self.model = NaiveModel


  def classify(self, text, CNN):

    out = self.model.predict(text)
    if(CNN):
        out = np.argmax(out,axis=1)
    return modifiedLabels[out[0]]



if __name__ == "__main__":
# The client code picks a concrete strategy and passes it to the context.
# The client should be aware of the differences between strategies in order
# to make the right choice.

  context = Context(SVMTrainedModel())

  data = "Kraftwerk's minimalist 1976 tribute to the pleasure of long-distance train journeys will likely be familiar to music fans, but to a generation of Europeans, Trans Europe Express remains a byword for fast, luxurious international travel. Replaced by the patchy and somewhat less glamorous EuroCity brand in 1987, the stylish red and ivory TEE trains were a response to the growth of air travel and the private car in the late 1950s."
  test = []
  test.append(data)

  print(context.runModel(test[0:1], False))
