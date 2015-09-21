﻿{
  "Main": {
    "Title": "Administration",
    "Tab": {
      "GS": "",
      "GettingStarted": "Getting started",
      "CD": "",
      "ContentData": "Content / Data",
      "VT": "",
      "ViewsTemplates": "Views / Templates",
      "Q": "",
      "Query": "Query Designer",
      "WA": "",
      "WebApi": "WebApi / Data",
      "IE": "",
      "ImportExport": "Import / Export",
      "PL": "",
      "PortalLanguages": "Portal / Languages",
      "AS": "",
      "AppSettings": "App Settings"
    },
    "Portal": {
      "Title": "Settings for the entire portal",
      "Intro": "These settings apply to all content and all apps within this portal."
    }
  },
  "Templates": {
    "Title": "Manage Templates",
    "InfoHideAdvanced": "Improve the user experience for the content-editor by hiding advanced features from him. If your portal contains a security role called “2sxc designers”, then non-members will not see buttons like Edit Template or Manage Templates. How-To documented <a href='http://2sxc.org/en/help?tag=hide-advanced' target='_blank'>here</a>.",
    "Table": {
      "TName": "Template Name",
      "TPath": "Path",
      "CType": "Content Type",
      "DemoC": "Demo item",
      "Show": "Show",
      "UrlKey": "Url key",
      "Actions": "Actions"
    }
  },
  "TemplateEdit": {
    "Title": "Edit Template - todo"
  },
  "WebAPIData": {
    "unused": {
      "Title": "Get content as if it were data for your template or JavaScript",
      "Intro": "Use the query designer to create complex queries. They can be used in normal templates (Token/Razor) or in JavaScript. Or you can create your custom JSON-WebAPI which is only for JavaScript - for example to save something, retrieve a file or perform a query too complex for the designer. Read more about <a href='http://2sxc.org/en/Docs/tag/Data%20and%20Data%20Sources' target='_blank'>coding data pipelines</a> and about <a href='http://2sxc.org/en/Docs/tag/Data%20and%20Data%20Sources' target='_blank'>using the data in JavaScript with jQuery, AngularJS and more</a>.",
      "Visual": {
        "Title": "Visual Data Query",
        "Intro": "Use the Visual Query Designer (Pipeline-Designer) to create queries to data from 2sxc, SQL, RSS and more.",
        "Button": "Visual Query Designer"
      }
    }
  },
  "WebApi": {
    "Title": "WebApi for this App",
    "Intro": "Create a WebApi within minutes by placing the source code in the folder called API and inheriting the correct interface. Try it out by creating one automatically and pressing here. Read more about the <a href='http://2sxc.org/en/Docs-Manuals/Feature/feature/3361' target='_blank'>WebApi</a> or the <a href='http://2sxc.org/en/Docs-Manuals/Feature/feature/3360' target='_blank'>C# data editing API</a>.",
    "ListTitle": "The following list shows the .cs files in the App-API folder:",
    "InfoMissingFolder": "(the directory does not exist)",
    "QuickStart": "For a quick start, we recommend that you install the WebApi demo-app. It contains some WebAPI controllers with various actions and some example views to use these controllers. Download <a href='http://2sxc.org/en/Apps/tag/WebApi' target='_blank'>WebApi demos in the App-Catalog</a> or read more about it in <a href='http://2sxc.org/en/help?tag=webapi' target='_blank'>help</a>"
  },
  "ImportExport": {
    "Title": "Export or Import <em>parts</em> of this App/Content",
    "Intro": "Create an xml or zip containing <em>parts</em> of this app, to import into another app or content. Or import such a parts-package.",
    "FurtherHelp": "For further help visit <a href='http://2sxc.org/en/help?tag=import' target='_blank'>2sxc Help</a>.",
          "Buttons": {
        "Import": "import",
        "Export": "export"
      },
    "Import": {
      "Title": "Import a content export (.zip) or a partial export (.xml)",
      "Explanation": "This import will add Content-Types, Templates and Content-Items to the current Content or App.",
      "Select": "select file to import",
      "Choose": "Choose file"
    },
    "Export": {
      "Title": "Partial Export of Content Types, Template Configuration and Content",
      "Intro": "This is an advanced export feature to export parts of this Content / App. It will create an XML-file for you which you can import into another site or App",
      "FurtherHelp": "For further help visit <a href='http://2sxc.org/en/help?tag=export' target='_blank'>2sxc Help</a>.",
      "Data": {
        "GroupHeading": "Content Type: {{name}} ({{id}}",
        "Templates": "Templates",
        "Items": "Content Items",
        "SimpleTemplates": "Templates without content type"
      },
      "ButtonExport": "Export"
    }
  },
  "Portal": {
    "Title": "Virtual Database (VDB)",
    "VdbLabel": "Virtual Database for this Portal",
    "Rename": "Note to 2tk - rename is not necessary any more, don't implement!"
  },
  "Language": {
    "Title": "Languages / Cultures",
    "Intro": "Manage the enabled / disable languages for this Zone (this portal)",
    "Table": {
      "Code": "Code",
      "Culture": "Culture",
      "Status": "Status"
    }
  },
  "AppConfig": {
    "Title": "App Configuration",
    "Intro": "Configure the App and special App-settings here.",
    "Settings": {
      "Title": "App Settings",
      "Intro": "Settings are configurations used by the app - like SQL-connection strings, default \"items-to-show\" numbers and things like that. They can also be multi-language, so that a setting (like default RSS-Feed) could be different in each language.",
      "Edit": "edit app settings",
      "Config": "configure app settings"
    },
    "Resources": {
      "Title": "App Resources",
      "Intro": "Resources are used for labels and things like that in the App. They are usually needed to create multi-lingual views and such, and should not be used for App-Settings.",
      "Edit": "edit app resources",
      "Config": "configure app resources"
    },
    "Definition": {
      "Edit": "edit app definition"
    },
    "Export": {
      "Title": "Export this <em>entire</em> App",
      "Intro": "Create an app-package (zip) which can be installed in another portal",
      "Button": "export"
    }
  },
  "AppManagement": {
    "Title": "Manage Apps in this Zone (Portal)",
    "Table": {
      "Name": "Name",
      "Folder": "Folder",
      "Templates": "Templates",
      "Show": "show this app to users",
      "Actions": "Actions"
    },
    "Buttons": {
      "Browse": "more apps",
      "Import": "import app",
      "Create": "create",
      "Export": "export app"
    }
  },
  "ReplaceContent": {
    "Title": "Replace Content Item",
    "Intro": "By replacing a content-item you can make a other content appear in the slot of the original content.",
    "ChooseItem": "Choose item:"
  }
}