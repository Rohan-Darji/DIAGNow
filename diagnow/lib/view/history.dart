import 'package:flutter/material.dart';

class History extends StatelessWidget {
  const History({ Key? key }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: SafeArea(
        child: Center(
          child: Text("History"),
        ),
      ),
    );
  }
}