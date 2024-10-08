Chaordic Bootstrap
=========

Modified version of Twitter Bootstrap for Chaordic projects.

Download
--------

You can either clone the repo or install with Bower:

-   `git clone git@github.com:chaordic/bootstrap`
-   `bower install git@github.com:chaordic/bootstrap --save`

There should be an option to share the same file with everybody, but not now.

What's included
---------------

```
dist/
├── styles/
│   ├── chaordic-bootstrap.css
│   └── chaordic-bootstrap.min.css
└── scripts/
    ├── chaordic-bootstrap.js
    └── chaordic-bootstrap.min.js
```

What else you'll need
---------------------

JavaScript based components require [JQuery](http://jquery.com/) to work, make sure to include it before `chaordic-bootstrap.js` in your page.

If you want to use the daterangepicker component, you'll need [MomentJS](http://momentjs.com/) as well.

In order to have more icon options (while we don't have our own icons font) we recommend you to use [Font Awesome](http://fontawesome.io/).

Basic Template
--------------

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Chaordic Market</title>
        <link href="styles/chaordic-bootstrap.min.css" rel="stylesheet">
    </head>
    <body>
        <!-- see sidebar component -->
        <div class="main-container">
            <!-- see page header component -->
            <!-- see tabs component -->
            <div class="page-content">
                <!-- page content goes inside -->
            </div>
        </div>
        <script src="scripts/jquery.min.js"></script>
        <script src="scripts/chaordic-bootstrap.min.js"></script>
    </body>
</html>
```

Without Sidebar
---------------

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Chaordic Market</title>
        <link href="styles/chaordic-bootstrap.min.css" rel="stylesheet">
    </head>
    <body>
        <!-- see page header with product selector component -->
        <!-- see tabs component -->
        <div class="page-content">
            <!-- page content goes inside -->
        </div>
        <script src="scripts/jquery.min.js"></script>
        <script src="scripts/chaordic-bootstrap.min.js"></script>
    </body>
</html>
```

Components
----------

### Sidebar

```html
<div class="sidebar">
    <div class="btn-group sidebar-brand">
        <a class="dropdown-toggle" data-toggle="dropdown"><img src="assets/logo-product.png" alt="Market"><i class="fa fa-angle-down"></i></a>
        <ul class="dropdown-menu">
            <li><a href="#"><img src="assets/onsite-symbol.png">Onsite</a></li>
            <li><a href="#"><img src="assets/mail-symbol.png">Mail</a></li>
            <li><a href="#"><img src="assets/search-symbol.png">Search</a></li>
            <li><a href="#"><img src="assets/market-symbol.png">Market</a></li>
            <li class="sidebar-header">Mais</li>
            <li><a href="#"><i class="fa fa-puzzle-piece"></i>Integração</a></li>
            <li><a href="#"><i class="fa fa-th-large"></i>Chaordic Central</a></li>
        </ul>
    </div>
    <ul class="nav">
        <li class="sidebar-header">Advertiser</li>
        <li class="active"><a href="#"><i class="fa fa-home"></i><span>Dashboard</span></a></li>
        <li><a href="#"><i class="fa fa-bar-chart-o"></i><span>Desempenho</span></a></li>
    </ul>
</div>
```

### Page header

```html
<div class="page-header">
    <h1>Dashboard</h1>
    <div>
        <!-- see tool selector component -->
        <!-- see client selector component -->
        <!-- see user area component -->
    </div>
</div>
```

### Page header with product selector

```html
<div class="page-header">
    <div class="product-selector">
        <div class="btn-group">
            <a class="dropdown-toggle" data-toggle="dropdown"><img class="closed-logo" src="assets/logo-chaordic-closed.png" alt="Market"><img class="open-logo" src="assets/logo-chaordic-open.png" alt="Market"><i class="fa fa-angle-down"></i></a>
            <ul class="dropdown-menu">
                <li><a href="#"><img src="assets/onsite-symbol.png">Onsite</a></li>
                <li><a href="#"><img src="assets/mail-symbol.png">Mail</a></li>
                <li><a href="#"><img src="assets/search-symbol.png">Search</a></li>
                <li><a href="#"><img src="assets/market-symbol.png">Market</a></li>
                <li class="dropdown-submenu">
                    <a href="#" class="sidebar-header">Mais</a>
                    <ul class="dropdown-menu">
                        <li><a href="#"><i class="fa fa-th-large"></i>Hub</a></li>
                        <li><a href="#"><i class="fa fa-puzzle-piece"></i>Integração</a></li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
    <h1>Dashboard</h1>
    <div>
        <!-- see tool selector component -->
        <!-- see client selector component -->
        <!-- see user area component -->
    </div>
</div>
```

### Tool selector
```html
<div class="btn-group">
    <a class="btn btn-link dropdown-toggle" data-toggle="dropdown">Ferramentas <i class="fa fa-angle-down"></i></a>
    <ul class="dropdown-menu dropdown-menu-right">
        <li><a href="#"><i class="fa fa-bar-chart-o"></i>Analytics</a></li>
    </ul>
</div>
```

### Client selector

```html
<div class="client-selector btn-group">
    <a class="btn btn-link dropdown-toggle" data-toggle="dropdown"><span id="selectedClientName">Livrarias Saraiva</span> <i class="fa fa-angle-down"></i></a>
    <ul class="dropdown-menu dropdown-menu-right">
        <li>
            <div class="form-group">
                <i class="fa fa-search"></i>
                <input type="text" class="form-control" placeholder="Busca">
            </div>
        </li>
        <li class="divider"></li>
        <li class="active"><a href="#">Livrarias Saraiva</a></li>
        <li><a href="#">Imaginarium</a></li>
    </ul>
</div>
```

### User area

```html
<div class="user-area btn-group">
    <span class="dropdown-toggle" data-toggle="dropdown">
        <img src="https://secure.gravatar.com/avatar/c7790195a496a869aad0103fe338658f?s=34&d=mm" alt="Guilherme Pacheco">
        <i class="fa fa-angle-down"></i>
    </span>
    <ul class="dropdown-menu dropdown-menu-right">
        <li><a href="#"><i class="fa fa-edit"></i>Editar perfil</a></li>
        <li class="divider"></li>
        <li><a href="#"><i class="fa fa-sign-out"></i>Sair</a></li>
    </ul>
</div>
```

### Tabs

```html
<ul class="nav nav-tabs">
    <li class="active"><a href="#" data-toggle="tab">Por categoria</a></li>
    <li><a href="#" data-toggle="tab">Por produto</a></li>
</ul>
```

### Featured panel

```html
<div class="panel panel-featured">
    <div class="panel-body">
        <i class="fa fa-filter"></i>
        <div class="highlight">2,6%</div>
        <div class="caption">CTR</div>
    </div>
</div>
```

## TODO

- Input group addon focus state
- Tag input
