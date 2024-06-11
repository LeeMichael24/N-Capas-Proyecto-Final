#include <Servo.h>

Servo porton;

int ledVerde = 6;
int ledRojo = 5;
int boton = 7;
bool estado;

void setup() {
  pinMode(ledVerde, OUTPUT);
  pinMode(ledRojo, OUTPUT);
  porton.attach(A1);
  porton.write(0);
  pinMode(boton, INPUT); 
}

void loop() {
  
  digitalWrite(ledRojo, HIGH);

  estado = digitalRead(boton);
  
  if (estado == 1) { 
    digitalWrite(ledRojo, LOW);
    digitalWrite(ledVerde, HIGH);
    porton.write(90);
    delay(10000);
  } else {
    digitalWrite(ledVerde, LOW);
    porton.write(0);
  }
}
