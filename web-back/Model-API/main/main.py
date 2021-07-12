from flask import Blueprint, render_template, jsonify, request
import trainedModel.Model as tm

main = Blueprint("main", __name__, static_folder="static", template_folder="template")


def rightClassifier(model, text):
    result = ''
    if model == 'SVM':
        context = tm.Context(tm.SVMTrainedModel())
        result = context.runModel(text[0:1], False)
    
    elif model == 'Naive Bayes':
        context = tm.Context(tm.NaiveBayesModel())
        result = context.runModel(text[0:1], False)

    elif model == 'Linear SVC':
        context = tm.Context(tm.LinearTrainedModel())
        result = context.runModel(text[0:1], False)

    elif model == 'Random Forest':
        context = tm.Context(tm.RandomForestModel())
        result = context.runModel(text[0:1], False)

    return result

@main.route("/text/class", methods=['POST', 'GET'])
def classify():
    if request.method == "POST":

        requestData = request.get_json()
        data = requestData['text']
        option = requestData['option']
        text = []
        text.append(data)

        # get the tag with appropriate classifier
        result = rightClassifier(option, text)

        return jsonify(
            tag=result,
        )



