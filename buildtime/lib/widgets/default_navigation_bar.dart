import 'package:flutter/material.dart';
import 'package:flutter_modular/flutter_modular.dart';
import 'package:micro_frontend_flutter/widgets/navigation_item.dart';

class DefaultNavigationBar extends StatelessWidget {
  const DefaultNavigationBar({super.key});

  @override
  Widget build(BuildContext context) {
    return SizedBox(
      height: 100.0,
      child: Row(
        mainAxisAlignment: MainAxisAlignment.end,
        mainAxisSize: MainAxisSize.max,
        children: [
          InkWell(
              child: const NavigationItem(title: 'Home'),
              onTap: () {
                Modular.to.navigate('/');
              }),
          InkWell(
              child: const NavigationItem(title: 'Dashboard'),
              onTap: () {
                Modular.to.navigate('/dashboard');
              }),
          InkWell(
              child: const NavigationItem(title: 'Product'),
              onTap: () {
                Modular.to.navigate('/product');
              }),
          InkWell(
              child: const NavigationItem(title: 'Inventory'),
              onTap: () {
                Modular.to.navigate('/inventory');
              }),
        ],
      ),
    );
  }
}
