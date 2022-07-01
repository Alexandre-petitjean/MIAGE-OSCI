#include <SPI.h>
#include <MFRC522.h>
#include <Arduino.h>

#define SS_PIN  5  // ESP32 pin GIOP5 
#define RST_PIN 27 // ESP32 pin GIOP27 

MFRC522 MFRC522(SS_PIN, RST_PIN);   // Create MFRC522 instance


void loadConstants(){
    SPI.begin(); // init SPI bus
    mfrc522.PCD_Init(); // init MFRC522
}

void readCard(){
    if (mfrc522.PICC_IsNewCardPresent()) { // new tag is available
    if (mfrc522.PICC_ReadCardSerial()) { // NUID has been readed
      // get the uid
      String result = "";
      for (int i = 0; i < mfrc522.uid.size; i++) {
        result += rfid.uid.uidByte[i] < 0x10 ? " 0" : " ";
        result += String(rfid.uid.uidByte[i], HEX);
      }
      Serial.print(result);
      rfid.PICC_HaltA(); // halt PICC
      rfid.PCD_StopCrypto1(); // stop encryption on PCD
    }
  }
}