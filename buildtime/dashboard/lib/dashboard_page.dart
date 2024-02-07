import 'package:dashboard/line_chart.dart';
import 'package:flutter/material.dart';

class DashboardPage extends StatelessWidget {
  const DashboardPage({super.key});

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.all(24.0),
      child: Card(
        child: Padding(
          padding: const EdgeInsets.all(24.0),
          child: Column(
            children: [
              const Text("Sales Chart"),
              Container(
                  constraints:
                      const BoxConstraints(maxHeight: 500, maxWidth: 1000),
                  child: const DashboardLineChart(isShowingMainData: true)),
            ],
          ),
        ),
      ),
    );
  }
}
