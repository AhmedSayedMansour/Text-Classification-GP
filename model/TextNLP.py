import sys
import html
import re
import string
from nltk.corpus import stopwords 
from nltk.stem import PorterStemmer
from nltk.tokenize import word_tokenize
from nltk.stem import WordNetLemmatizer

class TextNLP:

    def prepareData(self, data):
        #Escaping out HTML characters 
        data=html.unescape(data)
    
        # remove hyperlinks 
        data = re.sub(r'https?:\/\/.\S+', "", data) 
        
        # remove hashtags
        data = re.sub(r'#', '', data) 
        
        # remove old style data text "RT" 
        data = re.sub(r'^RT[\s]+', '', data)

        #dictionary consisting of the contraction and the actual value 
        dictionary ={"'s":" is","n't":" not","'m":" am","'ll":" will", "'d":" would","'ve":" have","'re":" are"} 
        
        #replace the contractions 
        for key,value in dictionary.items(): 
            if key in data: 
                data=data.replace(key,value)

        #separate the words 
        data = " ".join([s for s in re.split("([A-Z][a-z]+[^A-Z]*)",data) if s]) 
        
        #convert to lower case 
        data=data.lower()

        return data


    def slang(self, data):
        #replace the slang word with meaning
        file=open("slang.txt","r") 
        slang=file.read() 
        
        #seperating each line present in the file 
        slang=slang.split('\n') 
        
        data_tokens=data.split() 
        slang_word=[] 
        meaning=[] 
        
        #store the slang words and meanings in different lists 
        for line in slang: 
            temp=line.split("=") 
            slang_word.append(temp[0]) 
            meaning.append(temp[-1]) 
        
        #replace the slang word with meaning 
        for i,word in enumerate(data_tokens): 
            if word in slang_word: 
                idx=slang_word.index(word) 
                data_tokens[i]=meaning[idx] 
        data=" ".join(data_tokens)
        return data

    def stemmAndLemmatization(self, data):
        stemmer= PorterStemmer()
        lemmatizer=WordNetLemmatizer()

        data=word_tokenize(data)
        data_list=[] 
        for word in data:

            #word = stemmer.stem(word)
            word = lemmatizer.lemmatize(word)
            data_list.append(word)
        data=" ".join(data_list)

        return data

    def removeStopWords(self, data):
        #import english stopwords list from nltk 
        stopwords_eng = stopwords.words('english')  
        
        data_tokens=data.split() 
        data_list=[] 
        #remove stopwords 
        for word in data_tokens: 
            if word not in stopwords_eng: 
                data_list.append(word) 
        data=" ".join(data_list)

        return data

    def removepunctuations(self, data):
        #remove punctuations
        data_tokens=data.split() 
        data_list=[]  
        
        for word in data_tokens:
            if word not in string.punctuation: 
                data_list.append(word) 
        data=" ".join(data_list)

        return data