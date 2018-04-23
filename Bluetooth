#include <SoftwareSerial.h>
const int AOUTpin=0;//the AOUT pin of the alcohol sensor goes into analog pin A0 of the arduino
const int DOUTpin=2;//the DOUT pin of the alcohol sensor goes into digital pin D8 of the arduino
int counter = 0;
char data = 0;
SoftwareSerial bluetooth(3, 4); //define bluetooth serial and RX/TX pins

void setup() {
  Serial.begin(9600);   //set baud rate to arduino
  bluetooth.begin(9600); //set baud rate to bluetoothmodule
  pinMode(DOUTpin, INPUT);//sets the pin as an input to the arduino
  pinMode(AOUTpin, INPUT);//sets the pin as an input to the arduino
}

void loop() {  
  if (bluetooth.available()) //arduino cheks if there is message available
      {  
      data = bluetooth.read();
      Serial.print("Received Data:   ");        
      Serial.print(data);        
      Serial.print("\n"); 
  if (data == '2') // if received data is correct it goes to this loop.
      {
        Serial.print("Data Receive ok, exit from loop.");
        Serial.print("\n");
        Serial.println(counter);
        mittaus();
      }
      else      // if it is not it goes here.
      {
        bluetooth.println("2");
        Serial.print("Data Received ,but aint right");
        Serial.print("\n");
        delay(2000);
      }
      }
      else //if arduino doesnt receive anything it goes here.
      { 
        Serial.print("Didnt receive data, Send again");
        Serial.print("\n");
        bluetooth.println(counter);
        Serial.println("2");
        delay(2000);
        }
   }



void mittaus() {
int value, limit;
int y=0, i=0, summa=0, haverage=0;
float average;
int taulukko[20];
for (int x=0; x <= 100; x++){
value= analogRead(AOUTpin);//reads the analaog value from the alcohol sensor's AOUT pin
Serial.println(value);
taulukko[i] = value;
i++;
if (y==19){
for (int a=0; a<19; a++){
summa = summa + taulukko[a];
}
    Serial.println("summa ");
    Serial.println(summa);
    average = summa/20;
    summa = 0;
    Serial.println("average ");
    Serial.println(average);
    haverage = max(average,haverage);
    Serial.println("haverage ");
    Serial.println(haverage);
}
else {
y++;
}
if (i==19){
i = 0;
}  
}
for (int z=0; z<20; z++){
bluetooth.println(haverage);
if (bluetooth.available()) //arduino cheks if there is message available
      {  
      data = bluetooth.read();
      Serial.print("Received data:   ");        
      Serial.print(data);        
      Serial.print("\n");
if (data == '3'){ 
  Serial.println("Data sending success");
  break;
}
}
if (z==19) Serial.println("Data sending failed);
delay(1000);
}
}
