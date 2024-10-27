#include <WiFi.h>
#include <HTTPClient.h>

// WiFi credentials
const char* ssid = "USER";
const char* password = "PASS";

// Server endpoint for data (replace with your actual server IP)
const char* serverName = "end point";

// Dummy spectral data ranges for simulation
// Assume coal has an IR spectral value range of 150-200 and a hyperspectral range of 300-350
const int COAL_IR_MIN = 150;
const int COAL_IR_MAX = 200;
const int COAL_HS_MIN = 300;
const int COAL_HS_MAX = 350;

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

bool isCoalDetected(int irValue, int hsValue) {
  // Check if values are within coal-specific spectral ranges
  if (irValue >= COAL_IR_MIN && irValue <= COAL_IR_MAX &&
      hsValue >= COAL_HS_MIN && hsValue <= COAL_HS_MAX) {
    return true;
  }
  return false;
}

void sendDetectionData(String material) {
  if (WiFi.status() == WL_CONNECTED) {
    HTTPClient http;
    http.begin(serverName);
    http.addHeader("Content-Type", "application/json");

    // Prepare JSON payload
    String jsonPayload = "{\"material\":\"" + material + "\"}";
    int httpResponseCode = http.POST(jsonPayload);

    if (httpResponseCode > 0) {
      String response = http.getString();
      Serial.println("Server response: " + response);
    } else {
      Serial.print("Error code: ");
      Serial.println(httpResponseCode);
    }
    http.end();
  } else {
    Serial.println("WiFi not connected");
  }
}

void loop() {
  // Simulate sensor data (these values would come from real sensors)
  int irValue = random(100, 250);  // Dummy infrared reading
  int hsValue = random(200, 400);  // Dummy hyperspectral reading

  Serial.print("IR Value: ");
  Serial.println(irValue);
  Serial.print("HS Value: ");
  Serial.println(hsValue);

  if (isCoalDetected(irValue, hsValue)) {
    Serial.println("Coal detected based on spectral values.");
    sendDetectionData("Coal");
  } else {
    Serial.println("Non-coal material detected.");
    sendDetectionData("Non-Coal");
  }

  delay(5000);  // Delay before next reading
}
