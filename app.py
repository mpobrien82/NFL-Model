from flask import Flask, request, jsonify
import csv

app = Flask(__name__)

@app.route('/upload', methods=['POST'])
def upload_file():
    if 'file' not in request.files:
        return jsonify({'error': 'No file part'})
    
    file = request.files['file']

    if file.filename == '':
        return jsonify({'error': 'No selected file'})

    if file:
        try:
            # Save the uploaded CSV file
            filename = file.filename
            file.save(filename)

            # Process the CSV file
            data = process_csv(filename)

            # Optionally, you can delete the uploaded file after processing
            # import os
            # os.remove(filename)

            return jsonify(data)
        except Exception as e:
            return jsonify({'error': str(e)})

def process_csv(filename):
    # This function is where you would perform your data scraping from the CSV file
    # For demonstration purposes, let's just read the CSV file and return its contents

    data = []

    with open(filename, 'r') as csvfile:
        csvreader = csv.DictReader(csvfile)
        for row in csvreader:
            data.append(row)

    return data

if __name__ == '__main__':
    app.run(debug=True)
