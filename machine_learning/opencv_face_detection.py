import cv2
import time
import json
import requests

train_id = 12345
msg = 'a face has been detected'
url = '<BACKEND_URL>'

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


face_cascade = cv2.CascadeClassifier('haarcascade_frontalface_default.xml')
cap = cv2.VideoCapture(0)
if not cap.isOpened():
    print("Error: Could not open camera.")
    exit()

print("Press 'q' to quit")

previous_faces = []
movement_threshold = 30

while True:
    ret, frame = cap.read()
    if not ret:
        print("Error: Failed to capture image.")
        break

    gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
    faces = face_cascade.detectMultiScale(gray, scaleFactor=1.1, minNeighbors=5, minSize=(30, 30))

    new_detection = False
    for (x, y, w, h) in faces:
        detected = False
        for (px, py, pw, ph) in previous_faces:
            if abs(x - px) < movement_threshold and abs(y - py) < movement_threshold and abs(w - pw) < movement_threshold and abs(h - ph) < movement_threshold:
                detected = True
                break
        if not detected:
            new_detection = True
            break

    if new_detection:
        previous_faces = faces
        print("A face has been detected!")
        send_data()
    else:
        previous_faces = faces

    for (x, y, w, h) in faces:
        cv2.rectangle(frame, (x, y), (x+w, y+h), (255, 0, 0), 2)

    cv2.imshow('Face Detection', frame)

    if cv2.waitKey(1) & 0xFF == ord('q'):
        break

cap.release()
cv2.destroyAllWindows()

