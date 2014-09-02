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

Components
----------

### Sidebar

```html
<div class="sidebar">
    <div class="btn-group sidebar-brand">
        <a class="dropdown-toggle" data-toggle="dropdown"><i class="fa fa-angle-down"></i></a>
        <ul>
            <li><a href="#"><img src="assets/logo-product.png" alt="Search"></a></li>
            <li><a href="#"><img src="assets/logo-product.png" alt="OnSite"></a></li>
            <li><a href="#"><img src="assets/logo-product.png" alt="Mail"></a></li>
            <li class="sidebar-header">Mais</li>
            <li><a href="#"><i class="fa fa-th-large"></i>Hub</a></li>
            <li><a href="#"><i class="fa fa-th-large"></i>Integração</a></li>
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

### Tool selector
```html
<div class="btn-group">
    <a class="btn btn-link dropdown-toggle" data-toggle="dropdown">Ferramentas <i class="fa fa-angle-down"></i></a>
    <ul class="dropdown-menu">
        <li><a href="#"><i class="fa fa-bar-chart-o"></i>Analytics</a></li>
    </ul>
</div>
```

### Client selector

```html
<div class="client-selector btn-group">
    <a class="btn btn-link dropdown-toggle" data-toggle="dropdown"><span id="selectedClientName">Livrarias Saraiva</span> <i class="fa fa-angle-down"></i></a>
    <ul class="dropdown-menu">
        <li>
            <div class="form-group has-feedback">
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
    <img class="dropdown-toggle" data-toggle="dropdown" src="//www.gravatar.com/avatar/c7790195a496a869aad0103fe338658f?s=32" alt="Guilherme Pacheco">
    <ul class="dropdown-menu">
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

- Datepicker
- Input group addon focus state
- Tag input
