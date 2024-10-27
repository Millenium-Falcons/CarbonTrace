import numpy as np
import pandas as pd
from sklearn.linear_model import LogisticRegression
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score, classification_report
import time
import json
import requests

train_id = 12345
msg = 'an anomaly has been detected'
url = 'https://carbon-trace-pied.vercel.app/anomaly-detected'

def generate_data():
    data = {
        "train_id": train_id,
        "anomaly_details": msg
    }
    return data


def send_data():
    data = generate_data()
    
    try:
        json_data = json.dumps(data)
        headers = {"Content-Type": "application/json"}
        response = requests.post(url, data=json_data, headers=headers)
        
        if response.status_code == 200:
            print("Data sent successfully!")
            print("Server Response:", response.json())
        else:
            print(f"Failed to send data. Status Code: {response.status_code}")
            print("Error:", response.text)
    
    except requests.RequestException as e:
        print(f"An error occurred: {e}")

data = {
    "moisture_level": [44, 32, 41, 39, 34, 49, 51, 48, 53, 49, 36, 40],
}

df = pd.DataFrame(data)

base_moisture = 42
threshold = 5

df["diff_from_base"] = np.abs(df["moisture_level"] - base_moisture)
df["label"] = (df["diff_from_base"] > threshold).astype(int)

X = df[["diff_from_base"]]
y = df["label"]

X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

model = LogisticRegression()
model.fit(X_train, y_train)

y_pred = model.predict(X_test)
print("Accuracy:", accuracy_score(y_test, y_pred))
print("Classification Report:\n", classification_report(y_test, y_pred))

new_data = pd.DataFrame({"moisture_level": [34, 41, 61]})
new_data["diff_from_base"] = np.abs(new_data["moisture_level"] - base_moisture)
new_predictions = model.predict(new_data[["diff_from_base"]])

print("Predictions for new data:", new_predictions)
for i in new_predictions:
    if i == 1:
        send_data()


