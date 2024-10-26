import cv2
#import RPi.GPIO as GPIO
import time 

#GPIO.setmode(GPIO.BCM)
#signal_pin = 17
#GPIO.setup(signal_pin, GPIO.OUT)
#GPIO.output(signal_pin, GPIO.LOW)

face_cascade = cv2.CascadeClassifier('haarcascade_frontalface_default.xml')
cap = cv2.VideoCapture()
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
        print("A face has been detected !")
 #       GPIO.ouptut(signal_pin, GPIO.HIGH)
        time.sleep(0.5)
 #       GPIO.output(signal_pin, GPIO.LOW)
        previous_faces = faces
    else:
 #       GPIO.output(signal_pin, GPIO.LOW)
        previous_faces = faces

    for (x, y, w, h) in faces:
        cv2.rectangle(frame, (x, y), (x+w, y+h), (255, 0, 0), 2)

    cv2.imshow('Face Detection', frame)

    if cv2.waitKey(1) & 0xFF == ord('q'):
        break

cap.release()
cv2.destroyAllWindows()
#GPIO.ouptut(signal_pin, GPIO.LOW)
#GPIO.cleanup()
