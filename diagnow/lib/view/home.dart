import 'package:diagnow/common/constants.dart';
import 'package:diagnow/view/dashboard.dart';
import 'package:diagnow/view/diagnose.dart';
import 'package:diagnow/view/diet.dart';
import 'package:diagnow/view/history.dart';
import 'package:diagnow/view/prescription.dart';
import 'package:flutter/material.dart';

class HomeScreen extends StatefulWidget {
  const HomeScreen({Key? key}) : super(key: key);

  @override
  State<HomeScreen> createState() => _HomeScreenState();
}

class _HomeScreenState extends State<HomeScreen> {
  @override
  Widget build(BuildContext context) {
    int index = 2;

    final screens = [
      const Diagnose(),
      const Prescription(),
      const Dashboard(),
      const History(),
      const Diet()
    ];

    return Scaffold(
      body: screens[index],
      bottomNavigationBar: BottomNavigationBar(
        backgroundColor: pink,
        showSelectedLabels: false,
        showUnselectedLabels: false,
        iconSize: 32,
        currentIndex: index,
        onTap: (i) => {
          setState(() {
            index = i;
          })
        },
        items: [
          BottomNavigationBarItem(
            icon: Image(
              image: AssetImage(""),
            ),
          ),
          BottomNavigationBarItem(
            icon: Image(
              image: AssetImage(""),
            ),
          ),
          BottomNavigationBarItem(
            icon: Image(
              image: AssetImage(""),
            ),
          ),
          BottomNavigationBarItem(
            icon: Image(
              image: AssetImage(""),
            ),
          ),
          BottomNavigationBarItem(
            icon: Image(
              image: AssetImage(""),
            ),
          ),
        ],
      ),
    );
  }
}
