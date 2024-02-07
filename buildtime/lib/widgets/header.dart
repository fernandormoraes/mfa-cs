import 'package:flutter/material.dart';
import 'package:micro_frontend_flutter/widgets/default_navigation_bar.dart';

class AppContainer extends StatelessWidget {
  final Widget? child;

  const AppContainer({super.key, required this.child});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.white,
      body: Column(
        children: [
          const DefaultNavigationBar(),
          Expanded(child: child ?? const CircularProgressIndicator())
        ],
      ),
    );
  }
}
