import 'package:dashboard/dashboard_page.dart';
import 'package:flutter/material.dart';
import 'package:inventory/main.dart';
import 'package:micro_frontend_flutter/app_page.dart';
import 'package:micro_frontend_flutter/routing/routes_enum.dart';
import 'package:product/main.dart';

class RouteGenerator {
  static Route<dynamic> generateRoute(RouteSettings settings) {
    final routePath = Routes.values.firstWhere(
        (element) => element.name == settings.name,
        orElse: () => Routes.dashboard);

    switch (routePath) {
      case Routes.dashboard:
        return MaterialPageRoute(builder: (_) => const DashboardPage());
      case Routes.product:
        return MaterialPageRoute(builder: (_) => const ProductPage());
      case Routes.inventory:
        return MaterialPageRoute(builder: (_) => const InventoryPage());
      default:
        return MaterialPageRoute(builder: (_) => const AppPage());
    }
  }
}
