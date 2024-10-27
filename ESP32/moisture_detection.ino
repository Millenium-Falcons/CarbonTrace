#include <WiFi.h>
#include <HTTPClient.h>
#include <DHT.h>

// WiFi credentials
const char* ssid = "<YOUR SSID>";
const char* password = "<YOUR PASSWORD>";

// FastAPI server endpoint (replace with your actual server IP and port)
const char* serverName = "https://carbon-trace-pied.vercel.app/post-moisture";

// Moisture sensor pin configuration
const int MOISTURE_SENSOR_PIN = 36;  // Analog pin for moisture sensor
#define DHTTYPE DHT11

// Moisture threshold
const int MOISTURE_THRESHOLD = 60;   // Threshold moisture level for alert

void setup() {
  Serial.begin(115200);
  
  // Connect to WiFi
  WiFi.begin(ssid, password);
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  Serial.println("\nConnected to WiFi");
}

int getMoistureLevel() {
  int rawMoisture = analogRead(MOISTURE_SENSOR_PIN);
  int moisturePercentage = map(rawMoisture, 4095, 2200, 0, 100);  // Adjust as per calibration
  return moisturePercentage;
}

void sendMoistureData(int moistureLevel) {
  if (WiFi.status() == WL_CONNECTED) {
    HTTPClient http;
    http.begin(serverName);
    http.addHeader("Content-Type", "application/json");
    int train_id = 12354;

    // String jsonPayload = "{\"moisture_level\":" + String(moistureLevel) + "}";
    // String jsonPayload = "{\"train_id\":" + int(train_id) + ",\"moisture_level\":" + int(moistureLevel) + ",\"location\":\" raipur\"}";
    String jsonPayload = "{\"train_id\":" + String(train_id) + ",\"moisture_level\":" + String(moistureLevel) + ",\"location\":\"raipur\"}";

    int httpResponseCode = http.POST(jsonPayload);
    
    if (httpResponseCode > 0) {
      String response = http.getString();
      Serial.println("Response: " + response);
    } else {
      Serial.print("Error code: ");
      Serial.println(httpResponseCode);
    }
    http.end();
  } else {
    Serial.println("WiFi not connected");
  }
}

// void checkForFaceDetection() {
//   if (Serial.available() > 0) {  // Check if data is available on the serial port
//     char receivedChar = Serial.read();  // Read the incoming byte

//     if (receivedChar == '1') {
//       Serial.println("Face detected!");  // Optional: Confirmation message
//       digitalWrite(LED_BUILTIN, HIGH);   // Optional: Turn on LED to indicate detection
//       delay(500);                        // Wait for half a second
//       digitalWrite(LED_BUILTIN, LOW);    // Turn off LED
//     }
//   }
// }

void loop() {
  int moistureLevel = 99;
  Serial.print("Moisture Level: ");
  Serial.println(moistureLevel);

  if (moistureLevel > MOISTURE_THRESHOLD) {
    digitalWrite(13,HIGH);
    delay(1000);
    sendMoistureData(moistureLevel);

  }

  delay(5000);  // Delay 5 seconds before the next reading
}
