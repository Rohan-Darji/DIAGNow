import 'package:flutter/material.dart';

class Prescription extends StatelessWidget {
  const Prescription({ Key? key }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: SafeArea(
        child: Center(
          child: Text("Prescription"),
        ),
      ),
    );
  }
}