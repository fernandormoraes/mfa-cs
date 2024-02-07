enum Routes {
  dashboard('/'),
  product('/product'),
  inventory('/inventory');

  final String route;

  const Routes(this.route);
}
