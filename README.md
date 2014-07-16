Chaordic Bootstrap
=========

Modified version of Twitter Bootstrap for Chaordic projects.

Download
--------

You can either clone the repo or install with Bower:

-   `git clone git@github.com:chaordic/bootstrap`
-   `bower install git@github.com:chaordic/bootstrap --save`

There should be an option to share the same file for everybody, but not now.

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

In order to have more icon options (while we don't have our own icons font) we recommend you to use [Font Awesome](http://fontawesome.io/).

Basic Template
--------------

```HTML
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Chaordic Bootstrap 101 Template</title>
        <link href="styles/chaordic-bootstrap.min.css" rel="stylesheet">
    </head>
    <body>
        <!-- see Sidebar component -->
        <script src="scripts/jquery.min.js"></script>
        <script src="scripts/chaordic-bootstrap.min.js"></script>
    </body>
</html>
```

Components
----------

### Sidebar

```HTML
<div class="sidebar">
    <a class="sidebar-brand" href="#">Chaordic Product</a>
    <ul class="nav">
        <li class="active"><a href="#"><i class="fa fa-home"></i><span>Home</span></a></li>
        <li><a href="#"><i class="fa fa-bar-chart-o"></i><span>Reports</span></a></li>
        <li><a href="#"><i class="fa fa-wrench"></i><span>Settings</span></a></li>
    </ul>
    <div class="user">
        <div class="user-info">
            <img class="img-circle" src="//www.gravatar.com/avatar/c7790195a496a869aad0103fe338658f?s=30" alt="Guilherme Pacheco">
            Guilherme Pacheco
        </div>
        <a href="#" class="user-logout" title="Logout"><i class="fa fa-sign-out"></i></a>
    </div>
</div>
<div class="main-container">
    <!-- see Page header component -->
    <!-- see Page content component -->
</div>
```

### Page header

```HTML
<div class="page-header">
    <h1>Home</h1>
</div>
```

*With client selector*

```HTML
<div class="page-header">
    <h1>
        Home
        <div class="client-selector btn-group pull-right">
            <button class="btn btn-default dropdown-toggle" data-toggle="dropdown" type="button">
                <span id="selectedClientName">Imaginarium</span>
                <span class="caret"></span>
            </button>
            <ul class="dropdown-menu">
                <li>
                    <div class="form-group has-feedback">
                        <input type="text" class="form-control">
                        <span class="fa fa-search form-control-feedback"></span>
                    </div>
                </li>
                <li class="divider"></li>
                <li class="active"><a href="#">Imaginarium</a></li>
                <li><a href="#">Kangoolu</a></li>
                <li><a href="#">Livrarias Saraiva</a></li>
            </ul>
        </div>
    </h1>
</div>
```

*With tabs*

```HTML
<div class="page-header">
    <h1>
        Home
        <select>
            <option>Imaginarium</option>
            <option>Kangoolu</option>
            <option>Livrarias Saraiva</option>
        </select>
    </h1>
    <ul class="nav nav-tabs">
        <li class="active"><a href="#synonyms" data-toggle="tab">Sinônimos</a></li>
        <li><a href="#redirects" data-toggle="tab">Redirecionamentos</a></li>
    </ul>
</div>
```

### Page content

```HTML
<div class="page-content">
    ...
</div>
```
