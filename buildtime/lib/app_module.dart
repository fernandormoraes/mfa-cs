import 'package:dashboard/dashboard_page.dart';
import 'package:flutter_modular/flutter_modular.dart';
import 'package:inventory/presenter/inventory_page.dart';
import 'package:micro_frontend_flutter/app_page.dart';
import 'package:micro_frontend_flutter/widgets/header.dart';
import 'package:product/main.dart';

class AppModule extends Module {
  @override
  void binds(i) {}

  @override
  void routes(r) {
    r.child('/', child: (context) => const AppPage());
    r.child('/product',
        child: (context) => const AppContainer(child: ProductPage()));
    r.child('/dashboard',
        child: (context) => const AppContainer(child: DashboardPage()));
    r.child('/inventory',
        child: (context) => const AppContainer(child: InventoryPage()));
  }
}
