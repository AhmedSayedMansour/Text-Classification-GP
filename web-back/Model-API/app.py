import os
from flask import Flask
from main.main import main


app = Flask(__name__)

# register new app to the main application

app.register_blueprint(main, url_prefix="/api")



if __name__ == "__main__":
  app.run(debug=True, port=8080)
  


