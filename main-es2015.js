(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<body>\n  <app-nav-menu></app-nav-menu>\n  <div class=\"container\">\n    <router-outlet></router-outlet>\n  </div>\n</body>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/author-form/author-form.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/author-form/author-form.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row form-wrapper\">\n    <div class=\"col-lg-6 col-md-8 col-sm-12\">\n        <div class=\"mb-3 card mx-auto\">\n            <div class=\"card-header-tab card-header \">\n                <div>\n                    <a [routerLink]=\"['/authors']\" class=\"btn btn-outline-secondary\" >Back to panel</a>\n                </div>\n                <div class=\"text-center\">\n                    <span class=\"text-center\">Create Author</span>\n                </div>\n            </div>\n            <form [formGroup]=\"authorForm\" (ngSubmit)=\"addAuthor()\">\n                <mat-form-field appearance=\"fill\">\n                    <mat-label>Enter author name</mat-label>\n                    <input matInput placeholder=\"Stephen\" formControlName=\"firstName\">\n                    <mat-error *ngIf=\"firstName.invalid\">Name is required</mat-error>\n                </mat-form-field>\n                <mat-form-field appearance=\"fill\">\n                    <mat-label>Enter author surname</mat-label>\n                    <input matInput placeholder=\"King\" formControlName=\"lastName\">\n                    <mat-error *ngIf=\"lastName.invalid\">Surname is required</mat-error>\n                </mat-form-field>\n       \n                <div class=\"text-center\">\n                    <button type=\"submit\" [disabled]=\"authorForm.invalid\"\n                        class=\"btn btn-outline-primary\">Create</button>\n    \n                </div>\n            </form>\n    \n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/authors/authors.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/authors/authors.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\n    <a [routerLink]=\"['/author-form']\" class=\"btn btn-outline-primary\">Create author</a>\n</div>\n\n<mat-form-field class=\"example-full-width text-center\">\n    <mat-label>Search author</mat-label>\n    <input (keyup)=\"applyFilter($event)\" matInput placeholder=\"Ex Stephen King\">\n</mat-form-field>\n<mat-table class=\"mat-elevation-z8\" [dataSource]=\"dataSource\">\n\n    <ng-container matColumnDef=\"authorId\">\n        <mat-header-cell *matHeaderCellDef>#</mat-header-cell>\n        <mat-cell *matCellDef=\"let element\">{{element.authorId}}</mat-cell>\n    </ng-container>\n\n    <ng-container matColumnDef=\"firstName\">\n        <mat-header-cell *matHeaderCellDef>FirstName</mat-header-cell>\n        <mat-cell class=\"description-cell\" *matCellDef=\"let element\">{{element.firstName}}</mat-cell>\n\n    </ng-container>\n\n    <ng-container matColumnDef=\"lastName\">\n        <mat-header-cell *matHeaderCellDef>LastName</mat-header-cell>\n        <mat-cell class=\"duration-cell\" *matCellDef=\"let element\">{{element.lastName}}</mat-cell>\n    </ng-container>\n\n    <ng-container matColumnDef=\"actions\">\n        <th mat-header-cell *matHeaderCellDef>Actions</th>\n        <td mat-cell *matCellDef=\"let row\">\n            <button (click)=\"deleteAuthor(row.authorId)\" mat-icon-button matTooltip=\"Click to Delete\" class=\"iconbutton\"\n                color=\"warn\">\n                <mat-icon aria-label=\"delete\">delete</mat-icon>\n            </button>\n        </td>\n    </ng-container>\n\n    <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n\n    <mat-row *matRowDef=\"let row; columns: displayedColumns\"></mat-row>\n\n</mat-table>\n\n<mat-paginator [length]=\"authorsCount\" [pageSize]=\"pageSize\" (page)=\"onPageChanged($event,target)\" [hidePageSize]=\"true\">\n</mat-paginator>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/book-form/book-form.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/book-form/book-form.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row form-wrapper\">\n    <div class=\"col-lg-6 col-md-8 col-sm-12\">\n        <div class=\"mb-3 card mx-auto\">\n            <div class=\"card-header-tab card-header \">\n                <div>\n                    <a [routerLink]=\"['/books']\" class=\"btn btn-outline-secondary\">Back to panel</a>\n                </div>\n                <div class=\"text-center\">\n                    <span class=\"text-center\">{{actionText}} book</span>\n                </div>\n            </div>\n            <form [formGroup]=\"bookForm\" (ngSubmit)=\"addBook()\">\n                <mat-form-field appearance=\"fill\">\n                    <mat-label>Enter book title</mat-label>\n                    <input matInput placeholder=\"Ex. The Lord of the Rings\" formControlName=\"title\">\n                    <mat-error *ngIf=\"title.invalid\">Title is required</mat-error>\n                </mat-form-field>\n                <mat-form-field>\n                    <mat-label>Enter release date</mat-label>\n                    <input formControlName=\"releaseDate\" matInput [matDatepicker]=\"picker\">\n                    <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n                    <mat-datepicker #picker disabled=\"false\"></mat-datepicker>\n                    <mat-error *ngIf=\"releaseDate.invalid\">Date is required</mat-error>\n                </mat-form-field>\n                <mat-form-field appearance=\"fill\">\n                    <mat-label>Enter total count</mat-label>\n                    <input type=\"number\" matInput placeholder=\"Ex. 5\" formControlName=\"totalCount\">\n                    <mat-error *ngIf=\"totalCount.invalid\">Count is required</mat-error>\n                </mat-form-field>\n                <mat-form-field>\n                    <mat-label>Pick book authors</mat-label>\n                    <mat-select formControlName=\"authors\" multiple>\n                        <mat-select-trigger>\n                            {{this.bookForm.controls.authors.value ? this.bookForm.controls['authors']?.value[0]: ''}}\n                            <span *ngIf=\"bookForm.controls.authors.value?.length > 1\"\n                                class=\"example-additional-selection\">\n                                (+{{bookForm.controls.authors.value.length - 1}}\n                                {{bookForm.controls.authors.value?.length === 2 ? 'another' : 'others'}})\n                            </span>\n                        </mat-select-trigger>\n                        <mat-option *ngFor=\"let author of authorList\" [value]=\"author.firstName\">{{author.firstName.substr(0,1) + \". \" + author.lastName}}\n                        </mat-option>\n                    </mat-select>\n                    <mat-error *ngIf=\"bookForm.controls.authors.errors?.required\">Authors must be picked\n                    </mat-error>\n                </mat-form-field>\n                <div class=\"text-center\">\n                    <button type=\"submit\" [disabled]=\"bookForm.invalid\" class=\"btn btn-outline-primary\">{{actionText}}</button>\n\n                </div>\n            </form>\n\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/books/books.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/books/books.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div style=\"overflow: hidden;\">\n    <a *ngIf=\"isAdmin\" [routerLink]=\"['/book-form']\" class=\"btn btn-outline-primary left\">Create book</a>\n    <a [routerLink]=\"['/my-books/'+userId]\" class=\"btn btn-outline-warning right\">My books</a>\n</div>\n\n<div class=\"row form-wrapper\">\n    <div class=\"mb-3 card .mx-auto\">\n        <form [formGroup]=\"bookFilterForm\" (ngSubmit)=\"applyFilters()\">\n\n            <mat-form-field class=\"example-full-width text-center\">\n                <mat-label>Search by title</mat-label>\n                <input matInput formControlName=\"Title\" placeholder=\"Ex The Lord of the Rings\">\n            </mat-form-field>\n            <mat-form-field>\n                <mat-label>Enter release year</mat-label>\n                <input formControlName=\"ReleaseDate\" matInput [matDatepicker]=\"picker1\">\n                <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\n                <mat-datepicker #picker1 disabled=\"false\"></mat-datepicker>\n            </mat-form-field>\n            <mat-form-field>\n                <mat-label>Pick book authors</mat-label>\n                <mat-select formControlName=\"authors\" multiple>\n                    <mat-select-trigger>\n                        {{this.bookFilterForm.controls.authors.value ? this.bookFilterForm.controls['authors']?.value[0]: ''}}\n                        <span *ngIf=\"bookFilterForm.controls.authors.value?.length > 1\"\n                            class=\"example-additional-selection\">\n                            (+{{bookFilterForm.controls.authors.value.length - 1}}\n                            {{bookFilterForm.controls.authors.value?.length === 2 ? 'another' : 'others'}})\n                        </span>\n                    </mat-select-trigger>\n                    <mat-option *ngFor=\"let author of authorList\" [value]=\"author.authorId\">\n                        {{author.firstName.substr(0,1) + \". \" + author.lastName}}\n                    </mat-option>\n                </mat-select>\n            </mat-form-field>\n            <div class=\"inl-wrapper\">\n                <div class=\"inline-date\">\n                    <mat-form-field>\n                        <mat-label>Enter date from</mat-label>\n                        <input formControlName=\"ReleaseDateFrom\" matInput [matDatepicker]=\"picker2\">\n                        <mat-datepicker-toggle matSuffix [for]=\"picker2\"></mat-datepicker-toggle>\n                        <mat-datepicker #picker2 disabled=\"false\"></mat-datepicker>\n                    </mat-form-field>\n                </div>\n                <div class=\"inline-date\">\n                    <mat-form-field>\n                        <mat-label>Enter date to</mat-label>\n                        <input formControlName=\"ReleaseDateTo\" matInput [matDatepicker]=\"picker3\">\n                        <mat-datepicker-toggle matSuffix [for]=\"picker3\"></mat-datepicker-toggle>\n                        <mat-datepicker #picker3 disabled=\"false\"></mat-datepicker>\n                    </mat-form-field>\n                </div>\n            </div>\n\n\n            <div class=\"text-center\">\n                <button type=\"submit\" [disabled]=\"bookFilterForm.invalid\" class=\"btn btn-outline-primary\">Apply\n                    filters</button>\n\n            </div>\n        </form>\n\n    </div>\n</div>\n\n\n\n<mat-table class=\"mat-elevation-z8\" [dataSource]=\"dataSource\">\n\n    <ng-container matColumnDef=\"bookId\">\n        <mat-header-cell *matHeaderCellDef>#</mat-header-cell>\n        <mat-cell *matCellDef=\"let element\">{{element.book.bookId}}</mat-cell>\n    </ng-container>\n\n    <ng-container matColumnDef=\"title\">\n        <mat-header-cell *matHeaderCellDef>Title</mat-header-cell>\n        <mat-cell class=\"description-cell\" *matCellDef=\"let element\">{{element.book.title}}</mat-cell>\n\n    </ng-container>\n\n    <ng-container matColumnDef=\"releaseDate\">\n        <mat-header-cell *matHeaderCellDef>Release date</mat-header-cell>\n        <mat-cell class=\"duration-cell\" *matCellDef=\"let element\">{{element.book.releaseDate.substr(0,4)}}</mat-cell>\n    </ng-container>\n\n    <ng-container matColumnDef=\"totalCount\">\n        <mat-header-cell *matHeaderCellDef>Count</mat-header-cell>\n        <mat-cell class=\"duration-cell\" *matCellDef=\"let element\">{{element.book.availableCount}}</mat-cell>\n    </ng-container>\n\n    <ng-container  matColumnDef=\"authors\">\n        <mat-header-cell *matHeaderCellDef>Authors</mat-header-cell>\n        <mat-cell  class=\"duration-cell  authors-cell-wrapper\" *matCellDef=\"let element\">\n            <ng-container *ngFor=\"let author of element.authors\">\n                <div class=\"authorParagraph\" >{{\" \"+ author.firstName.substr(0,1) + \". \" + author.lastName + \"\\n\"}}\n                </div>\n            </ng-container>\n            \n            \n        </mat-cell>\n    </ng-container>\n\n    <ng-container matColumnDef=\"actions\">\n        <th mat-header-cell *matHeaderCellDef>Actions</th>\n        <td mat-cell *matCellDef=\"let row\">\n            <button [disabled]=\"row.book.availableCount<1\"  (click)=\"borrowBook(row.book.bookId)\" mat-icon-button matTooltip=\"Click to Borrow\"\n                class=\"iconbutton\" color=\"dark\">\n                <mat-icon aria-label=\"import_contacts\">import_contacts</mat-icon>\n            </button>\n            <a *ngIf=\"isAdmin\" [routerLink]=\"'/book-form/'+row.book.bookId\" mat-icon-button matTooltip=\"Click to Edit\"\n                class=\"iconbutton\" color=\"primary\">\n                <mat-icon aria-label=\"edit\">edit</mat-icon>\n            </a>\n            <button *ngIf=\"isAdmin\" (click)=\"deleteBook(row.book.bookId)\" mat-icon-button matTooltip=\"Click to Delete\"\n                class=\"iconbutton\" color=\"warn\">\n                <mat-icon aria-label=\"delete\">delete</mat-icon>\n            </button>\n        </td>\n    </ng-container>\n\n    <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n\n    <mat-row *matRowDef=\"let row; columns: displayedColumns\"></mat-row>\n\n</mat-table>\n\n<mat-paginator [length]=\"bookCount\" [pageSize]=\"pageSize\" (page)=\"onPageChanged($event,target)\" [hidePageSize]=\"true\">\n</mat-paginator>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/borrowed-books/borrowed-books.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/borrowed-books/borrowed-books.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\n    <a [routerLink]=\"['/books']\" class=\"btn btn-outline-secondary\" >Back to panel</a>\n</div>\n<hr/>\n<div class=\"row\">\n    <div *ngFor=\"let book of borrowedBooks\" class=\"col-lg-4 col-md-6 d-flex align-items-stretch\">\n        <div class=\"card\" style=\"width: 18rem;\">\n            <div class=\"card-body\">\n                <h5 class=\"card-title\">{{book.book.title}}</h5>\n                <h6 class=\"card-subtitle mb-2 text-muted\">{{book.book.releaseDate.substr(0,4)}}</h6>\n                <p *ngFor=\"let author of book.authors\" class=\"card-text\">\n                    {{author.firstName.substr(0,1) + \". \" + author.lastName}}</p>\n                <button (click)=\"returnBook(book.book.bookId)\" id=\"card-btn\" mat-icon-button matTooltip=\"Click to Return\" class=\"iconbutton \" color=\"warn\"\n                    class=\"card-link\">Return book\n                    <mat-icon aria-label=\"exit_to_app\">exit_to_app</mat-icon>\n                </button>\n                \n            </div>\n        </div>\n    </div>\n \n\n</div>\n<div *ngIf=\"borrowedBooks?.length <= 0\">\n    <p><strong>You don't have any borrowed books</strong></p>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"text-center\">\n    <h1>Library App</h1>\n    <span class=\"material-icons library-icon\">\n        local_library\n        </span>\n</div>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row form-wrapper\">\r\n  <div class=\"col-lg-6 col-md-8 col-sm-12\">\r\n      <div class=\"mb-3 card mx-auto\">\r\n          <div class=\"card-header-tab card-header \">\r\n              <div class=\"text-center\">\r\n                  <span class=\"text-center\">Login</span>\r\n              </div>\r\n          </div>\r\n          <form [formGroup]=\"loginForm\" (ngSubmit)=\"login()\">\r\n\r\n              <mat-form-field appearance=\"fill\">\r\n                  <mat-label>Enter Login</mat-label>\r\n                  <input matInput placeholder=\"ExampleUsername\" formControlName=\"userName\">\r\n                  <mat-error *ngIf=\"userName.invalid\">Login is required</mat-error>\r\n              </mat-form-field>\r\n              <mat-form-field appearance=\"fill\">\r\n                  <mat-label>Enter password</mat-label>\r\n                  <input type=\"password\" matInput formControlName=\"password\">\r\n                  <mat-error *ngIf=\"password.invalid\">Password is required</mat-error>\r\n              </mat-form-field>\r\n \r\n              <div class=\"text-center\">\r\n                  <button type=\"submit\" [disabled]=\"loginForm.invalid\"\r\n                      class=\"btn btn-outline-primary\">Login</button>\r\n              </div>\r\n          </form>\r\n          <div class=\"google-wrapper\">\r\n            <button class=\"btn btn-outline-danger\" (click)=\"signInWithGoogle()\"><span><fa-icon [icon]=\"gmailIcon\"></fa-icon></span></button>\r\n          </div>\r\n      </div>\r\n  </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/nav-menu/nav-menu.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/nav-menu/nav-menu.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<header>\n  <nav class=\"navbar navbar-expand-sm navbar-toggleable-sm navbar-light bg-white border-bottom box-shadow mb-3\">\n    <div class=\"container\">\n      <a class=\"navbar-brand\" [routerLink]=\"['/']\">LibraryApp</a>\n      <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\".navbar-collapse\"\n        aria-label=\"Toggle navigation\" [attr.aria-expanded]=\"isExpanded\" (click)=\"toggle()\">\n        <span class=\"navbar-toggler-icon\"></span>\n      </button>\n      <div class=\"navbar-collapse collapse d-sm-inline-flex flex-sm-row-reverse\" [ngClass]=\"{ show: isExpanded }\">\n        <ul class=\"navbar-nav flex-grow\">\n          \n          <li *ngIf=\"authService.isAdmin()\" class=\"nav-item\" [routerLinkActive]=\"['link-active']\">\n            <a  class=\"nav-link text-dark\" [routerLink]=\"['/authors']\">Authors</a>\n          </li>\n          <li class=\"nav-item\" [routerLinkActive]=\"['link-active']\">\n            <a class=\"nav-link text-dark\" [routerLink]=\"['/books']\">Books</a>\n          </li>\n          <li *ngIf=\"authService.isAdmin()\" class=\"nav-item\" [routerLinkActive]=\"['link-active']\">\n            <a class=\"nav-link text-dark\" [routerLink]=\"['/users']\">Users</a>\n          </li>\n          <li *ngIf=\"!authService.isAuthenticated()\" class=\"nav-item\" [routerLinkActive]=\"['link-active']\">\n            <a class=\"nav-link text-dark\" [routerLink]=\"['/login']\">Login</a>\n          </li>\n          <li *ngIf=\"!authService.isAuthenticated()\" class=\"nav-item\" [routerLinkActive]=\"['link-active']\">\n            <a class=\"nav-link text-dark\" [routerLink]=\"['/register']\">Register</a>\n          </li>\n          <li *ngIf=\"authService.isAuthenticated()\" class=\"nav-item\" [routerLinkActive]=\"['link-active']\">\n            <button class=\"btn btn-link nav-link text-dark\" (click)=\"logout()\">Logout</button>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </nav>\n</header>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row form-wrapper\">\n    <div class=\"col-lg-6 col-md-8 col-sm-12\">\n        <div class=\"mb-3 card mx-auto\">\n            <div class=\"card-header-tab card-header \">\n                <div class=\"text-center\">\n                    <span class=\"text-center\">Rejestracja</span>\n                </div>\n            </div>\n            <form [formGroup]=\"registerForm\" (ngSubmit)=\"register()\">\n    \n                <mat-form-field appearance=\"fill\">\n                    <mat-label>Enter username</mat-label>\n                    <input matInput placeholder=\"UserName23\" formControlName=\"userName\">\n                    <mat-error *ngIf=\"userName.invalid\">Username is required</mat-error>\n                </mat-form-field>\n                <mat-form-field appearance=\"fill\">\n                    <mat-label>Enter email</mat-label>\n                    <input matInput placeholder=\"example@gmail.com\" formControlName=\"email\">\n                    <mat-error *ngIf=\"email.invalid\">Email is required</mat-error>\n                    <mat-error *ngIf=\"email.errors?.email\">Not correct form of email</mat-error>\n                </mat-form-field>\n                <mat-form-field appearance=\"fill\">\n                    <mat-label>Enter password</mat-label>\n                    <input type=\"password\" matInput formControlName=\"password\">\n                    <mat-error *ngIf=\"registerForm.hasError('required','password')\">Password is required</mat-error>\n                </mat-form-field>\n                <mat-form-field appearance=\"fill\">\n                    <mat-label>Enter password confirmation</mat-label>\n                    <input type=\"password\" matInput formControlName=\"confirmPassword\" [errorStateMatcher]=\"matcher\">\n                    <mat-error *ngIf=\"confirmPassword.invalid\">Password confirmation is required</mat-error>\n                    <mat-error *ngIf=\"registerForm.hasError('notSame')\">Passwords not the same</mat-error>\n\n                </mat-form-field>\n    \n    \n                <div class=\"text-center\">\n                    <button type=\"submit\" [disabled]=\"registerForm.invalid\"\n                        class=\"btn btn-outline-primary\">Register</button>\n    \n                </div>\n            </form>\n    \n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/user-form/user-form.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user-form/user-form.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row form-wrapper\">\n    <div class=\"col-lg-6 col-md-8 col-sm-12\">\n        <div class=\"mb-3 card mx-auto\">\n            <div class=\"card-header-tab card-header \">\n                <div>\n                    <a [routerLink]=\"['/users']\" class=\"btn btn-outline-secondary\" >Back to panel</a>\n                </div>\n                <div class=\"text-center\">\n                    <span class=\"text-center\">Create user</span>\n                </div>\n            </div>\n            <form [formGroup]=\"userForm\" (ngSubmit)=\"addUser()\">\n                <mat-form-field appearance=\"fill\">\n                    <mat-label>Enter username</mat-label>\n                    <input matInput placeholder=\"UserName23\" formControlName=\"userName\">\n                    <mat-error *ngIf=\"userName.invalid\">Username is required</mat-error>\n                </mat-form-field>\n                <mat-form-field appearance=\"fill\">\n                    <mat-label>Enter email</mat-label>\n                    <input matInput placeholder=\"example@gmail.com\" formControlName=\"email\">\n                    <mat-error *ngIf=\"email.invalid\">Email is required</mat-error>\n                    <mat-error *ngIf=\"email.errors?.email\">Not correct form of email</mat-error>\n                </mat-form-field>\n                <mat-form-field appearance=\"fill\">\n                    <mat-label>Enter password</mat-label>\n                    <input type=\"password\" matInput formControlName=\"password\">\n                    <mat-error *ngIf=\"userForm.hasError('required','password')\">Password is required</mat-error>\n                </mat-form-field>\n                <mat-form-field appearance=\"fill\">\n                    <mat-label>Enter password confirmation</mat-label>\n                    <input type=\"password\" matInput formControlName=\"confirmPassword\" [errorStateMatcher]=\"matcher\">\n                    <mat-error *ngIf=\"confirmPassword.invalid\">Password confirmation is required</mat-error>\n                    <mat-error *ngIf=\"userForm.hasError('notSame')\">Passwords not the same</mat-error>\n\n                </mat-form-field>\n    \n    \n                <div class=\"text-center\">\n                    <button type=\"submit\" [disabled]=\"userForm.invalid\"\n                        class=\"btn btn-outline-primary\">Create</button>\n    \n                </div>\n            </form>\n    \n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/users-panel/users-panel.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/users-panel/users-panel.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\n  <a [routerLink]=\"['/user-form']\" class=\"btn btn-outline-primary\">Create user</a>\n</div>\n\n<div class=\"row form-wrapper\">\n  <div class=\"mb-3 card .mx-auto\">\n    <form [formGroup]=\"userFilterForm\" (ngSubmit)=\"applyFilters()\">\n\n      <mat-form-field class=\"example-full-width text-center\">\n        <mat-label>Search by username</mat-label>\n        <input matInput formControlName=\"UserName\" placeholder=\"Ex. Stephen98\">\n      </mat-form-field>\n      <mat-form-field class=\"example-full-width text-center\">\n        <mat-label>Search by email</mat-label>\n        <input matInput formControlName=\"Email\" placeholder=\"Ex. Stephen98@gmail.com\">\n      </mat-form-field>\n\n      <div class=\"text-center\">\n        <button type=\"submit\" [disabled]=\"userFilterForm.invalid\" class=\"btn btn-outline-primary\">Apply filters</button>\n\n      </div>\n    </form>\n\n  </div>\n</div>\n<mat-table class=\"lessons-table mat-elevation-z8\" [dataSource]=\"dataSource\">\n\n  <ng-container matColumnDef=\"userId\">\n    <mat-header-cell *matHeaderCellDef>#</mat-header-cell>\n    <mat-cell *matCellDef=\"let element\">{{element.userId}}</mat-cell>\n  </ng-container>\n\n  <ng-container matColumnDef=\"userName\">\n    <mat-header-cell *matHeaderCellDef>Username</mat-header-cell>\n    <mat-cell class=\"description-cell\" *matCellDef=\"let element\">{{element.userName}}</mat-cell>\n\n  </ng-container>\n\n  <ng-container matColumnDef=\"email\">\n    <mat-header-cell *matHeaderCellDef>Email</mat-header-cell>\n    <mat-cell class=\"duration-cell\" *matCellDef=\"let element\">{{element.email}}</mat-cell>\n  </ng-container>\n\n  <ng-container matColumnDef=\"actions\">\n    <th mat-header-cell *matHeaderCellDef>Actions</th>\n    <td mat-cell *matCellDef=\"let row\">\n      <button (click)=\"deleteUser(row.userId)\" mat-icon-button matTooltip=\"Click to Delete\" class=\"iconbutton\"\n        color=\"warn\">\n        <mat-icon aria-label=\"Usuń\">delete</mat-icon>\n      </button>\n    </td>\n  </ng-container>\n\n  <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n\n  <mat-row *matRowDef=\"let row; columns: displayedColumns\"></mat-row>\n\n</mat-table>\n\n<mat-paginator #paginator [length]=\"usersCount\" [pageSize]=\"pageSize\" (page)=\"onPageChanged($event,target)\" [hidePageSize]=\"true\">\n</mat-paginator>");

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/auth-guard.service */ "./src/app/services/auth-guard.service.ts");
/* harmony import */ var _user_form_user_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./user-form/user-form.component */ "./src/app/user-form/user-form.component.ts");
/* harmony import */ var _users_panel_users_panel_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./users-panel/users-panel.component */ "./src/app/users-panel/users-panel.component.ts");
/* harmony import */ var _books_books_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./books/books.component */ "./src/app/books/books.component.ts");
/* harmony import */ var _authors_authors_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./authors/authors.component */ "./src/app/authors/authors.component.ts");
/* harmony import */ var _author_form_author_form_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./author-form/author-form.component */ "./src/app/author-form/author-form.component.ts");
/* harmony import */ var _book_form_book_form_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./book-form/book-form.component */ "./src/app/book-form/book-form.component.ts");
/* harmony import */ var _borrowed_books_borrowed_books_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./borrowed-books/borrowed-books.component */ "./src/app/borrowed-books/borrowed-books.component.ts");
/* harmony import */ var _services_admin_guard_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./services/admin-guard.service */ "./src/app/services/admin-guard.service.ts");















const routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"], pathMatch: 'full' },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"] },
    { path: 'register', component: _register_register_component__WEBPACK_IMPORTED_MODULE_5__["RegisterComponent"] },
    { path: 'user-form', component: _user_form_user_form_component__WEBPACK_IMPORTED_MODULE_7__["UserFormComponent"], canActivate: [_services_admin_guard_service__WEBPACK_IMPORTED_MODULE_14__["AdminGuardService"]] },
    { path: 'users', component: _users_panel_users_panel_component__WEBPACK_IMPORTED_MODULE_8__["UsersPanelComponent"], canActivate: [_services_admin_guard_service__WEBPACK_IMPORTED_MODULE_14__["AdminGuardService"]] },
    { path: 'authors', component: _authors_authors_component__WEBPACK_IMPORTED_MODULE_10__["AuthorsComponent"], canActivate: [_services_admin_guard_service__WEBPACK_IMPORTED_MODULE_14__["AdminGuardService"]] },
    { path: 'author-form', component: _author_form_author_form_component__WEBPACK_IMPORTED_MODULE_11__["AuthorFormComponent"], canActivate: [_services_admin_guard_service__WEBPACK_IMPORTED_MODULE_14__["AdminGuardService"]] },
    { path: 'books', component: _books_books_component__WEBPACK_IMPORTED_MODULE_9__["BooksComponent"], canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_6__["AuthGuardService"]] },
    { path: 'book-form', component: _book_form_book_form_component__WEBPACK_IMPORTED_MODULE_12__["BookFormComponent"], canActivate: [_services_admin_guard_service__WEBPACK_IMPORTED_MODULE_14__["AdminGuardService"]] },
    { path: 'book-form/:id', component: _book_form_book_form_component__WEBPACK_IMPORTED_MODULE_12__["BookFormComponent"], canActivate: [_services_admin_guard_service__WEBPACK_IMPORTED_MODULE_14__["AdminGuardService"]] },
    { path: 'my-books/:id', component: _borrowed_books_borrowed_books_component__WEBPACK_IMPORTED_MODULE_13__["BorrowedBooksComponent"], canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_6__["AuthGuardService"]] },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'LibraryApp';
    }
};
AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: provideConfig, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "provideConfig", function() { return provideConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _nav_menu_nav_menu_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./nav-menu/nav-menu.component */ "./src/app/nav-menu/nav-menu.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/autocomplete.js");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/badge */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/badge.js");
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/bottom-sheet */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/bottom-sheet.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button-toggle */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button-toggle.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/chips.js");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/stepper */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/stepper.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/datepicker.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/grid-list.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-bar.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/radio.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/slider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slider.js");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/material/slide-toggle */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slide-toggle.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sort.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @angular/material/tree */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tree.js");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _services_book_service__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./services/book.service */ "./src/app/services/book.service.ts");
/* harmony import */ var _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./services/auth-guard.service */ "./src/app/services/auth-guard.service.ts");
/* harmony import */ var _services_token_interceptor_service__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./services/token-interceptor.service */ "./src/app/services/token-interceptor.service.ts");
/* harmony import */ var _user_form_user_form_component__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./user-form/user-form.component */ "./src/app/user-form/user-form.component.ts");
/* harmony import */ var _users_panel_users_panel_component__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./users-panel/users-panel.component */ "./src/app/users-panel/users-panel.component.ts");
/* harmony import */ var _books_books_component__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./books/books.component */ "./src/app/books/books.component.ts");
/* harmony import */ var _authors_authors_component__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./authors/authors.component */ "./src/app/authors/authors.component.ts");
/* harmony import */ var _author_form_author_form_component__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ./author-form/author-form.component */ "./src/app/author-form/author-form.component.ts");
/* harmony import */ var _book_form_book_form_component__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ./book-form/book-form.component */ "./src/app/book-form/book-form.component.ts");
/* harmony import */ var _borrowed_books_borrowed_books_component__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ./borrowed-books/borrowed-books.component */ "./src/app/borrowed-books/borrowed-books.component.ts");
/* harmony import */ var angularx_social_login__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! angularx-social-login */ "./node_modules/angularx-social-login/__ivy_ngcc__/fesm2015/angularx-social-login.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");






























































const config = new angularx_social_login__WEBPACK_IMPORTED_MODULE_58__["AuthServiceConfig"]([
    {
        id: angularx_social_login__WEBPACK_IMPORTED_MODULE_58__["GoogleLoginProvider"].PROVIDER_ID,
        provider: new angularx_social_login__WEBPACK_IMPORTED_MODULE_58__["GoogleLoginProvider"]('552114392257-907113igfs7j5vr7p5ql7kk6ofjcgcab.apps.googleusercontent.com')
    }
]);
function provideConfig() {
    return config;
}
let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"],
            _nav_menu_nav_menu_component__WEBPACK_IMPORTED_MODULE_7__["NavMenuComponent"],
            _home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"],
            _register_register_component__WEBPACK_IMPORTED_MODULE_44__["RegisterComponent"],
            _user_form_user_form_component__WEBPACK_IMPORTED_MODULE_51__["UserFormComponent"],
            _users_panel_users_panel_component__WEBPACK_IMPORTED_MODULE_52__["UsersPanelComponent"],
            _books_books_component__WEBPACK_IMPORTED_MODULE_53__["BooksComponent"],
            _authors_authors_component__WEBPACK_IMPORTED_MODULE_54__["AuthorsComponent"],
            _author_form_author_form_component__WEBPACK_IMPORTED_MODULE_55__["AuthorFormComponent"],
            _book_form_book_form_component__WEBPACK_IMPORTED_MODULE_56__["BookFormComponent"],
            _borrowed_books_borrowed_books_component__WEBPACK_IMPORTED_MODULE_57__["BorrowedBooksComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_45__["FormsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_45__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_47__["HttpClientModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormFieldModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_25__["MatInputModule"],
            _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_10__["MatAutocompleteModule"],
            _angular_material_badge__WEBPACK_IMPORTED_MODULE_11__["MatBadgeModule"],
            _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_12__["MatBottomSheetModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButtonModule"],
            _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_14__["MatButtonToggleModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_15__["MatCardModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_16__["MatCheckboxModule"],
            _angular_material_chips__WEBPACK_IMPORTED_MODULE_17__["MatChipsModule"],
            _angular_material_stepper__WEBPACK_IMPORTED_MODULE_18__["MatStepperModule"],
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_19__["MatDatepickerModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_20__["MatDialogModule"],
            _angular_material_divider__WEBPACK_IMPORTED_MODULE_21__["MatDividerModule"],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_22__["MatExpansionModule"],
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_23__["MatGridListModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_24__["MatIconModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_25__["MatInputModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_26__["MatListModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_27__["MatMenuModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_28__["MatNativeDateModule"],
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_29__["MatPaginatorModule"],
            _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_30__["MatProgressBarModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_31__["MatProgressSpinnerModule"],
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_32__["MatRadioModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_28__["MatRippleModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_33__["MatSelectModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_34__["MatSidenavModule"],
            _angular_material_slider__WEBPACK_IMPORTED_MODULE_35__["MatSliderModule"],
            _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_36__["MatSlideToggleModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_37__["MatSnackBarModule"],
            _angular_material_sort__WEBPACK_IMPORTED_MODULE_38__["MatSortModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_39__["MatTableModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_40__["MatTabsModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_41__["MatToolbarModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_42__["MatTooltipModule"],
            _angular_material_tree__WEBPACK_IMPORTED_MODULE_43__["MatTreeModule"],
            angularx_social_login__WEBPACK_IMPORTED_MODULE_58__["SocialLoginModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_59__["FontAwesomeModule"]
        ],
        providers: [_services_auth_service__WEBPACK_IMPORTED_MODULE_46__["AuthService"],
            _services_book_service__WEBPACK_IMPORTED_MODULE_48__["BookService"],
            _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_49__["AuthGuardService"],
            {
                provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_47__["HTTP_INTERCEPTORS"],
                useClass: _services_token_interceptor_service__WEBPACK_IMPORTED_MODULE_50__["TokenInterceptorService"],
                // option for another interceptors
                multi: true
            },
            {
                provide: angularx_social_login__WEBPACK_IMPORTED_MODULE_58__["AuthServiceConfig"],
                useFactory: provideConfig
            }
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/author-form/author-form.component.css":
/*!*******************************************************!*\
  !*** ./src/app/author-form/author-form.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".mat-form-field {\r\n    margin: 1em;\r\n    display: block;\r\n    position: relative;\r\n    text-align: center;\r\n  }\r\n\r\n.form-wrapper{\r\n    justify-content: center !important;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aG9yLWZvcm0vYXV0aG9yLWZvcm0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLGtCQUFrQjtFQUNwQjs7QUFFRjtJQUNJLGtDQUFrQztBQUN0QyIsImZpbGUiOiJzcmMvYXBwL2F1dGhvci1mb3JtL2F1dGhvci1mb3JtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0LWZvcm0tZmllbGQge1xyXG4gICAgbWFyZ2luOiAxZW07XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcblxyXG4uZm9ybS13cmFwcGVye1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/author-form/author-form.component.ts":
/*!******************************************************!*\
  !*** ./src/app/author-form/author-form.component.ts ***!
  \******************************************************/
/*! exports provided: AuthorFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthorFormComponent", function() { return AuthorFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _services_author_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/author.service */ "./src/app/services/author.service.ts");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");






let AuthorFormComponent = class AuthorFormComponent {
    constructor(fb, authorService, snackBar) {
        this.fb = fb;
        this.authorService = authorService;
        this.snackBar = snackBar;
        this.matcher = new _register_register_component__WEBPACK_IMPORTED_MODULE_3__["MyErrorStateMatcher"]();
    }
    ngOnInit() {
        this.authorForm = this.fb.group({
            firstName: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
                ]],
            lastName: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
                ]]
        });
    }
    get firstName() {
        return this.authorForm.get('firstName');
    }
    get lastName() {
        return this.authorForm.get('lastName');
    }
    addAuthor() {
        this.authorService.addAuthor(this.authorForm.value)
            .subscribe(data => {
            if (data['status'] === 1) {
                this.openSnackBar(data["message"], 'Close', 'red-snackbar');
            }
            else {
                this.openSnackBar('Author added successfully', 'Close', 'green-snackbar');
            }
        });
    }
    openSnackBar(message, action, className) {
        this.snackBar.open(message, action, {
            duration: 2000,
            panelClass: [className]
        });
    }
};
AuthorFormComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _services_author_service__WEBPACK_IMPORTED_MODULE_4__["AuthorService"] },
    { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"] }
];
AuthorFormComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-author-form',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./author-form.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/author-form/author-form.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./author-form.component.css */ "./src/app/author-form/author-form.component.css")).default]
    })
], AuthorFormComponent);



/***/ }),

/***/ "./src/app/authors/authors.component.css":
/*!***********************************************!*\
  !*** ./src/app/authors/authors.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".mat-form-field {\r\n    display: block;\r\n    position: relative;\r\n    text-align: left;\r\n}\r\n\r\ntd.mat-cell, td.mat-footer-cell, th.mat-header-cell {\r\n    padding: 0;\r\n    border-bottom-width: 1px;\r\n    border-bottom-style: none;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aG9ycy9hdXRob3JzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFVBQVU7SUFDVix3QkFBd0I7SUFDeEIseUJBQXlCO0FBQzdCIiwiZmlsZSI6InNyYy9hcHAvYXV0aG9ycy9hdXRob3JzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0LWZvcm0tZmllbGQge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcblxyXG50ZC5tYXQtY2VsbCwgdGQubWF0LWZvb3Rlci1jZWxsLCB0aC5tYXQtaGVhZGVyLWNlbGwge1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGJvcmRlci1ib3R0b20td2lkdGg6IDFweDtcclxuICAgIGJvcmRlci1ib3R0b20tc3R5bGU6IG5vbmU7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/authors/authors.component.ts":
/*!**********************************************!*\
  !*** ./src/app/authors/authors.component.ts ***!
  \**********************************************/
/*! exports provided: AuthorsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthorsComponent", function() { return AuthorsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _services_author_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/author.service */ "./src/app/services/author.service.ts");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");





let AuthorsComponent = class AuthorsComponent {
    constructor(authorService, snackBar) {
        this.authorService = authorService;
        this.snackBar = snackBar;
        this.displayedColumns = ["authorId", "firstName", "lastName", "actions"];
        this.activePageDataChunk = [];
        this.pageSize = 5;
    }
    ngOnInit() {
        this.authorService.getAuthors()
            .subscribe(data => {
            this.authors = data;
            this.authorsCount = data.length;
            this.activePageDataChunk = data.slice(0, this.pageSize);
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.activePageDataChunk);
        });
    }
    onPageChanged(e) {
        let firstCut = e.pageIndex * e.pageSize;
        let secondCut = firstCut + e.pageSize;
        this.activePageDataChunk = this.authors.slice(firstCut, secondCut);
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.activePageDataChunk);
    }
    applyFilter(event) {
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.authors);
        const filterValue = event.target.value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }
    deleteAuthor(authorId) {
        this.authorService.deleteAuthor(authorId.toString())
            .subscribe(data => {
            if (data['status'] === 1) {
                this.openSnackBar(data["message"], 'Close', 'red-snackbar');
            }
            else {
                this.openSnackBar('Author deleted successfully', 'Close', 'green-snackbar');
                var filteredList = this.authors.filter(a => a.authorId !== authorId);
                this.authors = filteredList;
                this.authorsCount = this.authors.length;
                this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.authors.slice(0, this.pageSize));
            }
        });
    }
    openSnackBar(message, action, className) {
        this.snackBar.open(message, action, {
            duration: 2000,
            panelClass: [className]
        });
    }
};
AuthorsComponent.ctorParameters = () => [
    { type: _services_author_service__WEBPACK_IMPORTED_MODULE_3__["AuthorService"] },
    { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"] }
];
AuthorsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-authors',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./authors.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/authors/authors.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./authors.component.css */ "./src/app/authors/authors.component.css")).default]
    })
], AuthorsComponent);



/***/ }),

/***/ "./src/app/book-form/book-form.component.css":
/*!***************************************************!*\
  !*** ./src/app/book-form/book-form.component.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".mat-form-field {\r\n    margin: 1em;\r\n    display: block;\r\n    position: relative;\r\n    text-align: center;\r\n  }\r\n\r\n.form-wrapper{\r\n    justify-content: center !important;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYm9vay1mb3JtL2Jvb2stZm9ybS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsa0JBQWtCO0VBQ3BCOztBQUVGO0lBQ0ksa0NBQWtDO0FBQ3RDIiwiZmlsZSI6InNyYy9hcHAvYm9vay1mb3JtL2Jvb2stZm9ybS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC1mb3JtLWZpZWxkIHtcclxuICAgIG1hcmdpbjogMWVtO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuLmZvcm0td3JhcHBlcntcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/book-form/book-form.component.ts":
/*!**************************************************!*\
  !*** ./src/app/book-form/book-form.component.ts ***!
  \**************************************************/
/*! exports provided: BookFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookFormComponent", function() { return BookFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _services_author_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/author.service */ "./src/app/services/author.service.ts");
/* harmony import */ var _services_book_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/book.service */ "./src/app/services/book.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");







let BookFormComponent = class BookFormComponent {
    constructor(fb, authorService, bookService, route, router, snackBar) {
        this.fb = fb;
        this.authorService = authorService;
        this.bookService = bookService;
        this.route = route;
        this.router = router;
        this.snackBar = snackBar;
        this.actionText = "Create";
        route.params.subscribe(p => {
            //+before p converts id to a number
            this.bookId = +p['id'] || null;
        });
    }
    ngOnInit() {
        this.bookForm = this.fb.group({
            title: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
                ]],
            releaseDate: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
                ]],
            totalCount: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                ]],
            authors: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
                ]]
        });
        this.authorService.getAuthors()
            .subscribe(data => this.authorList = data);
        if (this.bookId) {
            this.actionText = "Update";
            this.bookService.getBook(this.bookId)
                .subscribe(data => {
                this.book = {
                    book: {
                        bookId: null,
                        title: '',
                        releaseDate: null,
                        totalCount: null
                    },
                    authors: []
                };
                this.book = data;
                // populate form
                this.bookForm.controls.title.setValue(this.book.book.title);
                this.bookForm.controls.releaseDate.setValue(this.book.book.releaseDate);
                this.bookForm.controls.totalCount.setValue(this.book.book.totalCount);
                // populate dropdown
                const selectedAuthors = this.book.authors.map(aut => aut.firstName);
                this.bookForm.controls.authors.setValue(selectedAuthors);
            });
        }
    }
    get title() {
        return this.bookForm.get('title');
    }
    get releaseDate() {
        return this.bookForm.get('releaseDate');
    }
    get totalCount() {
        return this.bookForm.get('totalCount');
    }
    openSnackBar(message, action, className) {
        this.snackBar.open(message, action, {
            duration: 2000,
            panelClass: [className]
        });
    }
    addBook() {
        // convert categories, vods dropdownlist value to proper object and set to form value
        const authList = this.bookForm.controls.authors.value.map(el => {
            return this.authorList.find(x => x.firstName === el);
        });
        this.bookForm.controls.authors.setValue(authList);
        const book = {
            bookId: 0,
            title: this.bookForm.controls["title"].value,
            releaseDate: this.bookForm.controls["releaseDate"].value,
            totalCount: parseInt(this.bookForm.controls["totalCount"].value)
        };
        if (this.bookId) {
            // delete authors from book
            this.book.authors.map(el => {
                this.bookService.deleteAuthorFromBook(el.authorId, this.bookId)
                    .subscribe(data => { });
            });
            // update book and authors
            book.bookId = this.bookId;
            this.bookService.updateBook(book)
                .subscribe(data => {
                authList.map(el => {
                    this.bookService.addAuthorToBook(el.authorId, data["id"])
                        .subscribe(data => this.book.authors = authList);
                });
                if (data['status'] === 1) {
                    this.openSnackBar(data["message"], 'Close', 'red-snackbar');
                }
                else {
                    this.openSnackBar('Book updated', 'Close', 'green-snackbar');
                }
            });
        }
        else {
            // add book
            this.bookService.createBook(book).subscribe(data => {
                authList.map(el => {
                    this.bookService.addAuthorToBook(el.authorId, data["id"])
                        .subscribe(data => {
                        if (data['status'] === 1) {
                            this.openSnackBar(data["message"], 'Close', 'red-snackbar');
                        }
                        else {
                            this.openSnackBar('Book created', 'Close', 'green-snackbar');
                        }
                    });
                });
            });
        }
        // populate dropdown lists back 
        const selectedAuthors = authList.map(auth => auth.firstName);
        this.bookForm.controls.authors.setValue(selectedAuthors);
        // populate book authors again
        this.book.authors = authList;
    }
};
BookFormComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _services_author_service__WEBPACK_IMPORTED_MODULE_3__["AuthorService"] },
    { type: _services_book_service__WEBPACK_IMPORTED_MODULE_4__["BookService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"] }
];
BookFormComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-book-form',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./book-form.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/book-form/book-form.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./book-form.component.css */ "./src/app/book-form/book-form.component.css")).default]
    })
], BookFormComponent);



/***/ }),

/***/ "./src/app/books/books.component.css":
/*!*******************************************!*\
  !*** ./src/app/books/books.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".mat-form-field {\r\n    margin: 1em;\r\n    display: block;\r\n    position: relative;\r\n    text-align: center;\r\n  }\r\n\r\n.form-wrapper{\r\n    justify-content: center !important;\r\n}\r\n\r\ntd.mat-cell, td.mat-footer-cell, th.mat-header-cell {\r\n    padding: 0;\r\n    border-bottom-width: 1px;\r\n    border-bottom-style: none;\r\n}\r\n\r\n.card {\r\n    margin-top: 30px;\r\n    margin-bottom: 40px;\r\n    margin-right: auto;\r\n    margin-left: auto;\r\n    position: relative;\r\n    display: flex;\r\n    flex-direction: column;\r\n    min-width: 0;\r\n    padding: 10px;\r\n    word-wrap: break-word;\r\n    background-color: #fff;\r\n    background-clip: border-box;\r\n    border: 2px solid rgb(94, 49, 144);\r\n    border-radius: .25rem;\r\n    box-shadow: 0 8px 2px var(--shadow-2);\r\n  }\r\n\r\n.card-header:first-child {\r\n    border-radius: calc(.25rem - 1px) calc(.25rem - 1px) 0 0;\r\n  }\r\n\r\n.inline-date{\r\n      display: inline-block;\r\n  }\r\n\r\n.inl-wrapper{\r\n    justify-content: center !important;\r\n  }\r\n\r\n.left{\r\n    float: left;\r\n  }\r\n\r\n.right{\r\n    float: right;\r\n  }\r\n\r\n.authorParagraph{\r\n    letter-spacing: 1px;\r\n    padding: 0.1rem;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYm9va3MvYm9va3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLGtCQUFrQjtFQUNwQjs7QUFFRjtJQUNJLGtDQUFrQztBQUN0Qzs7QUFDQTtJQUNJLFVBQVU7SUFDVix3QkFBd0I7SUFDeEIseUJBQXlCO0FBQzdCOztBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUVsQixhQUFhO0lBR2Isc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWixhQUFhO0lBQ2IscUJBQXFCO0lBQ3JCLHNCQUFzQjtJQUN0QiwyQkFBMkI7SUFDM0Isa0NBQWtDO0lBQ2xDLHFCQUFxQjtJQUNyQixxQ0FBcUM7RUFDdkM7O0FBRUE7SUFDRSx3REFBd0Q7RUFDMUQ7O0FBRUE7TUFDSSxxQkFBcUI7RUFDekI7O0FBQ0E7SUFDRSxrQ0FBa0M7RUFDcEM7O0FBRUE7SUFDRSxXQUFXO0VBQ2I7O0FBRUE7SUFDRSxZQUFZO0VBQ2Q7O0FBRUE7SUFDRSxtQkFBbUI7SUFDbkIsZUFBZTtFQUNqQiIsImZpbGUiOiJzcmMvYXBwL2Jvb2tzL2Jvb2tzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0LWZvcm0tZmllbGQge1xyXG4gICAgbWFyZ2luOiAxZW07XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcblxyXG4uZm9ybS13cmFwcGVye1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcclxufVxyXG50ZC5tYXQtY2VsbCwgdGQubWF0LWZvb3Rlci1jZWxsLCB0aC5tYXQtaGVhZGVyLWNlbGwge1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGJvcmRlci1ib3R0b20td2lkdGg6IDFweDtcclxuICAgIGJvcmRlci1ib3R0b20tc3R5bGU6IG5vbmU7XHJcbn1cclxuLmNhcmQge1xyXG4gICAgbWFyZ2luLXRvcDogMzBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XHJcbiAgICAtd2Via2l0LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBtaW4td2lkdGg6IDA7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIGJhY2tncm91bmQtY2xpcDogYm9yZGVyLWJveDtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYig5NCwgNDksIDE0NCk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAuMjVyZW07XHJcbiAgICBib3gtc2hhZG93OiAwIDhweCAycHggdmFyKC0tc2hhZG93LTIpO1xyXG4gIH1cclxuICBcclxuICAuY2FyZC1oZWFkZXI6Zmlyc3QtY2hpbGQge1xyXG4gICAgYm9yZGVyLXJhZGl1czogY2FsYyguMjVyZW0gLSAxcHgpIGNhbGMoLjI1cmVtIC0gMXB4KSAwIDA7XHJcbiAgfVxyXG5cclxuICAuaW5saW5lLWRhdGV7XHJcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB9XHJcbiAgLmlubC13cmFwcGVye1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5sZWZ0e1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgfVxyXG5cclxuICAucmlnaHR7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgfVxyXG4gXHJcbiAgLmF1dGhvclBhcmFncmFwaHtcclxuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgICBwYWRkaW5nOiAwLjFyZW07XHJcbiAgfSJdfQ== */");

/***/ }),

/***/ "./src/app/books/books.component.ts":
/*!******************************************!*\
  !*** ./src/app/books/books.component.ts ***!
  \******************************************/
/*! exports provided: BooksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BooksComponent", function() { return BooksComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _services_book_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/book.service */ "./src/app/services/book.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _services_author_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/author.service */ "./src/app/services/author.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");









let BooksComponent = class BooksComponent {
    constructor(authService, bookService, fb, authorService, router, snackBar) {
        this.authService = authService;
        this.bookService = bookService;
        this.fb = fb;
        this.authorService = authorService;
        this.router = router;
        this.snackBar = snackBar;
        this.displayedColumns = ["bookId", "title", "releaseDate", "totalCount", "authors", "actions"];
        this.activePageDataChunk = [];
        this.pageSize = 5;
    }
    ngOnInit() {
        this.bookFilterForm = this.fb.group({
            Title: ['', []],
            ReleaseDate: ['', []],
            ReleaseDateFrom: ['', []],
            ReleaseDateTo: ['', []],
            authors: ['', []],
        });
        this.bookService.getBooks()
            .subscribe(data => {
            this.books = data;
            this.bookCount = data.length;
            this.activePageDataChunk = data.slice(0, this.pageSize);
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.activePageDataChunk);
        });
        this.authorService.getAuthors()
            .subscribe(data => this.authorList = data);
        this.authService.getUserInfo()
            .subscribe(data => {
            localStorage.setItem('id', data["sub"]);
            this.userId = data["sub"];
        });
        this.isAdmin = this.authService.isAdmin();
    }
    onPageChanged(e) {
        let firstCut = e.pageIndex * e.pageSize;
        let secondCut = firstCut + e.pageSize;
        this.activePageDataChunk = this.books.slice(firstCut, secondCut);
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.activePageDataChunk);
    }
    deleteBook(bookId) {
        this.bookService.deleteBook(bookId)
            .subscribe(data => {
            if (data['status'] === 1) {
                this.openSnackBar(data["message"], 'Close', 'red-snackbar');
            }
            else {
                this.openSnackBar('Book deleted successfully', 'Close', 'green-snackbar');
                var filteredList = this.books.filter(book => book.book.bookId !== bookId);
                this.books = filteredList;
                this.bookCount = this.books.length;
                this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.books.slice(0, this.pageSize));
            }
        });
    }
    applyFilters() {
        var filterObj = {};
        if (this.bookFilterForm.controls["Title"].value) {
            filterObj["Title"] = this.bookFilterForm.controls["Title"].value;
        }
        if (this.bookFilterForm.controls["ReleaseDate"].value) {
            var dateStrToSendToServer = new Date(this.bookFilterForm.controls["ReleaseDate"].value);
            filterObj["ReleaseDate"] = dateStrToSendToServer.toISOString();
        }
        if (this.bookFilterForm.controls["ReleaseDateFrom"].value) {
            var dateStrToSendToServer = new Date(this.bookFilterForm.controls["ReleaseDateFrom"].value);
            filterObj["ReleaseDateFrom"] = dateStrToSendToServer.toISOString();
        }
        if (this.bookFilterForm.controls["ReleaseDateTo"].value) {
            var dateStrToSendToServer = new Date(this.bookFilterForm.controls["ReleaseDateTo"].value);
            filterObj["ReleaseDateTo"] = dateStrToSendToServer.toISOString();
        }
        if (this.bookFilterForm.controls["authors"].value) {
            filterObj["authorIds"] = this.bookFilterForm.controls["authors"].value;
        }
        this.bookService.getBookFilter(filterObj)
            .subscribe(data => {
            this.books = data;
            this.bookCount = data.length;
            this.activePageDataChunk = data.slice(0, this.pageSize);
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.activePageDataChunk);
        });
    }
    borrowBook(bookId) {
        const userId = localStorage.getItem("id");
        this.bookService.borrowBook(userId, bookId)
            .subscribe(data => {
            if (data['status'] === 1) {
                this.openSnackBar(data["message"], 'Close', 'red-snackbar');
            }
            else {
                this.openSnackBar('Book borrowed', 'Close', 'green-snackbar');
                this.router.navigate(['/my-books/' + userId]);
            }
        }, error => {
            this.openSnackBar("Error", 'Close', 'red-snackbar');
        });
    }
    openSnackBar(message, action, className) {
        this.snackBar.open(message, action, {
            duration: 2000,
            panelClass: [className]
        });
    }
};
BooksComponent.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] },
    { type: _services_book_service__WEBPACK_IMPORTED_MODULE_3__["BookService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _services_author_service__WEBPACK_IMPORTED_MODULE_5__["AuthorService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
    { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__["MatSnackBar"] }
];
BooksComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-books',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./books.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/books/books.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./books.component.css */ "./src/app/books/books.component.css")).default]
    })
], BooksComponent);



/***/ }),

/***/ "./src/app/borrowed-books/borrowed-books.component.css":
/*!*************************************************************!*\
  !*** ./src/app/borrowed-books/borrowed-books.component.css ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".card{\r\n    margin-bottom: 30px;\r\n}\r\n#card-btn{\r\n    position: absolute;\r\n    bottom:   0;\r\n}\r\n.card-body{\r\n    position: relative;\r\n    \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYm9ycm93ZWQtYm9va3MvYm9ycm93ZWQtYm9va3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7QUFDZjtBQUNBO0lBQ0ksa0JBQWtCOztBQUV0QiIsImZpbGUiOiJzcmMvYXBwL2JvcnJvd2VkLWJvb2tzL2JvcnJvd2VkLWJvb2tzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZHtcclxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbn1cclxuI2NhcmQtYnRue1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAgIDA7XHJcbn1cclxuLmNhcmQtYm9keXtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIFxyXG59Il19 */");

/***/ }),

/***/ "./src/app/borrowed-books/borrowed-books.component.ts":
/*!************************************************************!*\
  !*** ./src/app/borrowed-books/borrowed-books.component.ts ***!
  \************************************************************/
/*! exports provided: BorrowedBooksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BorrowedBooksComponent", function() { return BorrowedBooksComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_book_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/book.service */ "./src/app/services/book.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");





let BorrowedBooksComponent = class BorrowedBooksComponent {
    constructor(bookService, route, router, snackBar) {
        this.bookService = bookService;
        this.route = route;
        this.router = router;
        this.snackBar = snackBar;
        route.params.subscribe(p => {
            //+before p converts id to a number
            this.userId = p['id'] || null;
        });
    }
    ngOnInit() {
        this.borrowedBooks = [];
        this.bookService.getBorrowedBooks(this.userId)
            .subscribe(data => {
            this.borrowedBooks = data;
        });
    }
    returnBook(bookId) {
        const userId = localStorage.getItem("id");
        this.bookService.returnBook(userId, bookId)
            .subscribe(data => {
            var filteredList = this.borrowedBooks.filter(book => book.book.bookId !== bookId);
            this.borrowedBooks = filteredList;
            this.openSnackBar("Book returned", 'Close', 'green-snackbar');
        }, error => {
            this.openSnackBar("Error", 'Close', 'red-snackbar');
        });
    }
    openSnackBar(message, action, className) {
        this.snackBar.open(message, action, {
            duration: 2000,
            panelClass: [className]
        });
    }
};
BorrowedBooksComponent.ctorParameters = () => [
    { type: _services_book_service__WEBPACK_IMPORTED_MODULE_2__["BookService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"] }
];
BorrowedBooksComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-borrowed-books',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./borrowed-books.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/borrowed-books/borrowed-books.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./borrowed-books.component.css */ "./src/app/borrowed-books/borrowed-books.component.css")).default]
    })
], BorrowedBooksComponent);



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".library-icon{\r\n    font-size: 30rem;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5saWJyYXJ5LWljb257XHJcbiAgICBmb250LXNpemU6IDMwcmVtO1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let HomeComponent = class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
};
HomeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")).default]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".mat-form-field {\r\n    margin: 1em;\r\n    display: block;\r\n    position: relative;\r\n    text-align: center;\r\n  }\r\n\r\n.form-wrapper{\r\n    justify-content: center !important;\r\n}\r\n\r\n.google-wrapper{\r\n  margin: auto;\r\n  padding: 20px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLGtCQUFrQjtFQUNwQjs7QUFFRjtJQUNJLGtDQUFrQztBQUN0Qzs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC1mb3JtLWZpZWxkIHtcclxuICAgIG1hcmdpbjogMWVtO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuLmZvcm0td3JhcHBlcntcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5nb29nbGUtd3JhcHBlcntcclxuICBtYXJnaW46IGF1dG87XHJcbiAgcGFkZGluZzogMjBweDtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
/* harmony import */ var angularx_social_login__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angularx-social-login */ "./node_modules/angularx-social-login/__ivy_ngcc__/fesm2015/angularx-social-login.js");
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ "./node_modules/@fortawesome/free-brands-svg-icons/index.es.js");









let LoginComponent = class LoginComponent {
    constructor(fb, authService, router, snackBar, socialAuthService) {
        this.fb = fb;
        this.authService = authService;
        this.router = router;
        this.snackBar = snackBar;
        this.socialAuthService = socialAuthService;
        this.gmailIcon = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faGoogle"];
    }
    ngOnInit() {
        this.loginForm = this.fb.group({
            userName: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
                ]],
            password: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
                ]]
        });
    }
    get userName() {
        return this.loginForm.get('userName');
    }
    get password() {
        return this.loginForm.get('password');
    }
    login() {
        this.authService.login(this.loginForm.value)
            .subscribe(data => {
            this.authService.saveToken(data.access_token);
            this.authService.getUserInfo()
                .subscribe(data => {
                this.authService.getUserRole(data["sub"])
                    .subscribe(role => {
                    this.authService.saveRole(role["message"]);
                });
            });
            this.openSnackBar('Logged In!', 'Close', 'green-snackbar');
            this.router.navigate(["books"]);
        }, error => {
            this.openSnackBar(error.error["error_description"], 'Close', 'red-snackbar');
        });
    }
    signInWithGoogle() {
        this.socialAuthService.signIn(angularx_social_login__WEBPACK_IMPORTED_MODULE_6__["GoogleLoginProvider"].PROVIDER_ID).then(x => {
            this.authService.getIdentityServerToken(x['idToken'])
                .subscribe(identityToken => {
                this.authService.saveToken(identityToken);
                this.authService.getUserInfo()
                    .subscribe(data => {
                    this.authService.getUserRole(data["sub"])
                        .subscribe(role => {
                        this.authService.saveRole(role["message"]);
                    });
                });
                this.openSnackBar('Logged In!', 'Close', 'green-snackbar');
                this.router.navigate(["books"]);
            }, error => {
                this.openSnackBar(error.error["error_description"], 'Close', 'red-snackbar');
            });
        });
    }
    openSnackBar(message, action, className) {
        this.snackBar.open(message, action, {
            duration: 2000,
            panelClass: [className]
        });
    }
};
LoginComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"] },
    { type: angularx_social_login__WEBPACK_IMPORTED_MODULE_6__["AuthService"] }
];
LoginComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")).default]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/nav-menu/nav-menu.component.css":
/*!*************************************************!*\
  !*** ./src/app/nav-menu/nav-menu.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("a.navbar-brand {\r\n    white-space: normal;\r\n    text-align: center;\r\n    word-break: break-all;\r\n  }\r\n  \r\n  html {\r\n    font-size: 14px;\r\n  }\r\n  \r\n  @media (min-width: 768px) {\r\n    html {\r\n      font-size: 16px;\r\n    }\r\n  }\r\n  \r\n  .box-shadow {\r\n    box-shadow: 0 .25rem .75rem rgba(0, 0, 0, .05);\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2LW1lbnUvbmF2LW1lbnUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIscUJBQXFCO0VBQ3ZCOztFQUVBO0lBQ0UsZUFBZTtFQUNqQjs7RUFDQTtJQUNFO01BQ0UsZUFBZTtJQUNqQjtFQUNGOztFQUVBO0lBQ0UsOENBQThDO0VBQ2hEIiwiZmlsZSI6InNyYy9hcHAvbmF2LW1lbnUvbmF2LW1lbnUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImEubmF2YmFyLWJyYW5kIHtcclxuICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XHJcbiAgfVxyXG4gIFxyXG4gIGh0bWwge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gIH1cclxuICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAgIGh0bWwge1xyXG4gICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC5ib3gtc2hhZG93IHtcclxuICAgIGJveC1zaGFkb3c6IDAgLjI1cmVtIC43NXJlbSByZ2JhKDAsIDAsIDAsIC4wNSk7XHJcbiAgfSJdfQ== */");

/***/ }),

/***/ "./src/app/nav-menu/nav-menu.component.ts":
/*!************************************************!*\
  !*** ./src/app/nav-menu/nav-menu.component.ts ***!
  \************************************************/
/*! exports provided: NavMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavMenuComponent", function() { return NavMenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




let NavMenuComponent = class NavMenuComponent {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
        this.isExpanded = false;
    }
    collapse() {
        this.isExpanded = false;
    }
    toggle() {
        this.isExpanded = !this.isExpanded;
    }
    logout() {
        this.authService.logout();
        this.router.navigate([""]);
    }
};
NavMenuComponent.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
NavMenuComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-nav-menu',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./nav-menu.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/nav-menu/nav-menu.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./nav-menu.component.css */ "./src/app/nav-menu/nav-menu.component.css")).default]
    })
], NavMenuComponent);



/***/ }),

/***/ "./src/app/register/register.component.css":
/*!*************************************************!*\
  !*** ./src/app/register/register.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".mat-form-field {\r\n    margin: 1em;\r\n    display: block;\r\n    position: relative;\r\n    text-align: center;\r\n  }\r\n\r\n.form-wrapper{\r\n    justify-content: center !important;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLGtCQUFrQjtFQUNwQjs7QUFFRjtJQUNJLGtDQUFrQztBQUN0QyIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0LWZvcm0tZmllbGQge1xyXG4gICAgbWFyZ2luOiAxZW07XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcblxyXG4uZm9ybS13cmFwcGVye1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent, MyErrorStateMatcher */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyErrorStateMatcher", function() { return MyErrorStateMatcher; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");






let RegisterComponent = class RegisterComponent {
    constructor(fb, authService, router, snackBar) {
        this.fb = fb;
        this.authService = authService;
        this.router = router;
        this.snackBar = snackBar;
        this.matcher = new MyErrorStateMatcher();
    }
    ngOnInit() {
        this.registerForm = this.fb.group({
            userName: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
                ]],
            email: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email
                ]],
            password: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
                ]],
            confirmPassword: [''],
        }, { validators: this.checkPasswords });
    }
    get userName() {
        return this.registerForm.get('userName');
    }
    get email() {
        return this.registerForm.get('email');
    }
    get password() {
        return this.registerForm.get('password');
    }
    get confirmPassword() {
        return this.registerForm.get('confirmPassword');
    }
    register() {
        this.authService.register(this.registerForm.value)
            .subscribe(data => {
            this.openSnackBar('User Created!', 'Close', 'green-snackbar');
        }, error => {
            this.openSnackBar(error.error["error_description"], 'Close', 'red-snackbar');
        });
        this.router.navigate([""]);
    }
    checkPasswords(group) {
        let password = group.get('password').value;
        let confirmPassword = group.get('confirmPassword').value;
        return password === confirmPassword ? null : { notSame: true };
    }
    openSnackBar(message, action, className) {
        this.snackBar.open(message, action, {
            duration: 2000,
            panelClass: [className]
        });
    }
};
RegisterComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"] }
];
RegisterComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-register',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./register.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./register.component.css */ "./src/app/register/register.component.css")).default]
    })
], RegisterComponent);

class MyErrorStateMatcher {
    isErrorState(control, form) {
        const invalidCtrl = !!(control && control.invalid && control.parent.dirty);
        const invalidParent = !!(control && control.parent && control.parent.invalid && control.parent.dirty);
        return (invalidCtrl || invalidParent);
    }
}


/***/ }),

/***/ "./src/app/services/admin-guard.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/admin-guard.service.ts ***!
  \*************************************************/
/*! exports provided: AdminGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminGuardService", function() { return AdminGuardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




let AdminGuardService = class AdminGuardService {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    canActivate() {
        if (this.authService.isAdmin() && this.authService.isAuthenticated()) {
            return true;
        }
        else {
            this.router.navigate(['login']);
            return false;
        }
    }
};
AdminGuardService.ctorParameters = () => [
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
AdminGuardService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AdminGuardService);



/***/ }),

/***/ "./src/app/services/auth-guard.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/auth-guard.service.ts ***!
  \************************************************/
/*! exports provided: AuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return AuthGuardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.service */ "./src/app/services/auth.service.ts");




let AuthGuardService = class AuthGuardService {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    canActivate() {
        if (this.authService.isAuthenticated()) {
            return true;
        }
        else {
            this.router.navigate(['login']);
            return false;
        }
    }
};
AuthGuardService.ctorParameters = () => [
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AuthGuardService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthGuardService);



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");




let AuthService = class AuthService {
    constructor(http) {
        this.http = http;
        this.loginPath = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + 'connect/token';
        this.registerPath = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + 'api/User/AddUser';
        this.dataPath = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + 'connect/userinfo';
        this.getUserRolePath = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + 'api/Role/GetUserRole/';
        this.googleTokenPath = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + 'api/User/ValidateGoogleUser?tokenId=';
        this.options = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/x-www-form-urlencoded')
        };
        this.corsOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .set("Access-Control-Allow-Origin", "*")
                .set('Access-Control-Allow-Credentials', 'true')
                .set('Access-Control-Allow-Headers', 'append,delete,entries,foreach,get,has,keys,set,values,Authorization')
                .set('Access-Control-Allow-Methods', 'GET, PUT, POST, OPTIONS, DELETE')
        };
    }
    login(data) {
        let body = new URLSearchParams();
        body.set('client_id', 'LibraryApp');
        body.set('client_secret', 'secretsecretsecretsecretsecretsecretsecretsecret');
        body.set('grant_type', 'password');
        body.set('scope', 'api1 openid profile email');
        body.set('username', data.userName);
        body.set('password', data.password);
        return this.http.post(this.loginPath, body.toString(), this.options);
    }
    getIdentityServerToken(token) {
        return this.http.get(this.googleTokenPath + token, { responseType: 'text' });
    }
    logout() {
        localStorage.removeItem('token');
        localStorage.removeItem('id');
        localStorage.removeItem('role');
    }
    isAdmin() {
        if (localStorage.getItem('role') === "admin")
            return true;
        return false;
    }
    getUserInfo() {
        return this.http.get(this.dataPath);
    }
    getUserRole(userId) {
        return this.http.get(this.getUserRolePath + userId);
    }
    saveRole(role) {
        localStorage.setItem('role', role);
    }
    register(data) {
        return this.http.post(this.registerPath, data);
    }
    saveToken(token) {
        localStorage.setItem('token', token);
    }
    getToken() {
        return localStorage.getItem('token');
    }
    isAuthenticated() {
        if (this.getToken())
            return true;
        return false;
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
AuthService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthService);



/***/ }),

/***/ "./src/app/services/author.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/author.service.ts ***!
  \********************************************/
/*! exports provided: AuthorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthorService", function() { return AuthorService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let AuthorService = class AuthorService {
    constructor(http) {
        this.http = http;
        this.authorsPath = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + 'api/Author/GetAuthors';
        this.deleteAuthorPath = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + 'api/Author/DeleteAuthor/';
        this.createAuthorPath = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + 'api/Author/AddAuthor';
    }
    getAuthors() {
        return this.http.get(this.authorsPath).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((author) => author));
    }
    addAuthor(author) {
        return this.http.post(this.createAuthorPath, author);
    }
    deleteAuthor(authorId) {
        return this.http.delete(this.deleteAuthorPath + authorId);
    }
};
AuthorService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
AuthorService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthorService);



/***/ }),

/***/ "./src/app/services/book.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/book.service.ts ***!
  \******************************************/
/*! exports provided: BookService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookService", function() { return BookService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");






let BookService = class BookService {
    constructor(http, authService) {
        this.http = http;
        this.authService = authService;
        this.bookPath = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + 'api/Book/GetBooks';
        this.getBooksParamsPath = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + 'api/Book/GetBooks?';
        this.deleteBookPath = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + 'api/Book/DeleteBook/';
        this.createBookPath = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + 'api/Book/AddBook';
        this.addAuthorToBookPath = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + 'api/AuthorBook/AddAuthorToBook/';
        this.deleteAuthorFromBookPath = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + 'api/AuthorBook/DeleteAuthorFromBook/';
        this.getBookPath = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + 'api/Book/GetBook/';
        this.updateBookPath = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + 'api/Book/EditBook/';
        this.borrowBookPath = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + 'api/UserBorrow/BorrowBook/';
        this.getBorrowedBooksPath = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + 'api/UserBorrow/GetUserBorrowBooks/';
        this.returnBookPath = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + "api/UserBorrow/ReturnBook/";
    }
    toQueryString(obj) {
        var parts = [];
        for (var prop in obj) {
            var value = obj[prop];
            if (value != null && value != undefined) {
                if (prop === "authorIds") {
                    for (var val of value) {
                        parts.push(encodeURIComponent(prop) + '=' + encodeURIComponent(val));
                    }
                }
                else {
                    parts.push(encodeURIComponent(prop) + '=' + encodeURIComponent(value));
                }
            }
        }
        return parts.join('&');
    }
    getBorrowedBooks(userId) {
        return this.http.get(this.getBorrowedBooksPath + userId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((book) => book));
    }
    returnBook(userId, bookId) {
        return this.http.post(this.returnBookPath + userId + "/" + bookId, null);
    }
    borrowBook(userId, bookId) {
        return this.http.post(this.borrowBookPath + userId + "/" + bookId, null);
    }
    createBook(book) {
        return this.http.post(this.createBookPath, book);
    }
    addAuthorToBook(authorId, bookId) {
        return this.http.post(this.addAuthorToBookPath + authorId + "/" + bookId, null);
    }
    getBooks() {
        return this.http.get(this.bookPath).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((book) => book));
    }
    getBookFilter(data) {
        return this.http.get(this.getBooksParamsPath + this.toQueryString(data)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((book) => book));
    }
    getBook(bookId) {
        return this.http.get(this.getBookPath + bookId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((book) => book));
    }
    updateBook(book) {
        return this.http.put(this.updateBookPath + book.bookId, book);
    }
    deleteBook(bookId) {
        return this.http.delete(this.deleteBookPath + bookId);
    }
    deleteAuthorFromBook(authorId, bookId) {
        return this.http.post(this.deleteAuthorFromBookPath + authorId + "/" + bookId, null);
    }
};
BookService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }
];
BookService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], BookService);



/***/ }),

/***/ "./src/app/services/token-interceptor.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/services/token-interceptor.service.ts ***!
  \*******************************************************/
/*! exports provided: TokenInterceptorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenInterceptorService", function() { return TokenInterceptorService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/app/services/auth.service.ts");



let TokenInterceptorService = class TokenInterceptorService {
    constructor(auth) {
        this.auth = auth;
    }
    intercept(request, next) {
        request = request.clone({
            setHeaders: {
                Authorization: `Bearer ${this.auth.getToken()}`
            }
        });
        return next.handle(request);
    }
};
TokenInterceptorService.ctorParameters = () => [
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
];
TokenInterceptorService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], TokenInterceptorService);



/***/ }),

/***/ "./src/app/services/users.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/users.service.ts ***!
  \*******************************************/
/*! exports provided: UsersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersService", function() { return UsersService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let UsersService = class UsersService {
    constructor(http) {
        this.http = http;
        this.usersPath = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + 'api/User/GetUsers';
        this.deleteUserPath = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + 'api/User/DeleteUser/';
        this.getUsersFilterPath = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + 'api/User/GetUsers?';
    }
    toQueryString(obj) {
        var parts = [];
        for (var prop in obj) {
            var value = obj[prop];
            if (value != null && value != undefined)
                parts.push(encodeURIComponent(prop) + '=' + encodeURIComponent(value));
        }
        return parts.join('&');
    }
    getUsers() {
        return this.http.get(this.usersPath).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((users) => users));
    }
    getUsersFilter(data) {
        return this.http.get(this.getUsersFilterPath + this.toQueryString(data)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((user) => user));
    }
    deleteUser(id) {
        return this.http.delete(this.deleteUserPath + id);
    }
};
UsersService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
UsersService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], UsersService);



/***/ }),

/***/ "./src/app/user-form/user-form.component.css":
/*!***************************************************!*\
  !*** ./src/app/user-form/user-form.component.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".mat-form-field {\r\n    margin: 1em;\r\n    display: block;\r\n    position: relative;\r\n    text-align: center;\r\n  }\r\n\r\n.form-wrapper{\r\n    justify-content: center !important;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci1mb3JtL3VzZXItZm9ybS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsa0JBQWtCO0VBQ3BCOztBQUVGO0lBQ0ksa0NBQWtDO0FBQ3RDIiwiZmlsZSI6InNyYy9hcHAvdXNlci1mb3JtL3VzZXItZm9ybS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC1mb3JtLWZpZWxkIHtcclxuICAgIG1hcmdpbjogMWVtO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuLmZvcm0td3JhcHBlcntcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/user-form/user-form.component.ts":
/*!**************************************************!*\
  !*** ./src/app/user-form/user-form.component.ts ***!
  \**************************************************/
/*! exports provided: UserFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserFormComponent", function() { return UserFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");






let UserFormComponent = class UserFormComponent {
    constructor(fb, authService, snackBar) {
        this.fb = fb;
        this.authService = authService;
        this.snackBar = snackBar;
        this.matcher = new _register_register_component__WEBPACK_IMPORTED_MODULE_4__["MyErrorStateMatcher"]();
    }
    ngOnInit() {
        this.userForm = this.fb.group({
            userName: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
                ]],
            email: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email
                ]],
            password: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
                ]],
            confirmPassword: [''],
        }, { validators: this.checkPasswords });
    }
    get userName() {
        return this.userForm.get('userName');
    }
    get email() {
        return this.userForm.get('email');
    }
    get password() {
        return this.userForm.get('password');
    }
    get confirmPassword() {
        return this.userForm.get('confirmPassword');
    }
    addUser() {
        this.authService.register(this.userForm.value)
            .subscribe(data => {
            if (data['status'] === 1) {
                this.openSnackBar(data["message"], 'Close', 'red-snackbar');
            }
            else {
                this.openSnackBar('User added successfully', 'Close', 'green-snackbar');
            }
        });
    }
    checkPasswords(group) {
        let password = group.get('password').value;
        let confirmPassword = group.get('confirmPassword').value;
        return password === confirmPassword ? null : { notSame: true };
    }
    openSnackBar(message, action, className) {
        this.snackBar.open(message, action, {
            duration: 2000,
            panelClass: [className]
        });
    }
};
UserFormComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"] }
];
UserFormComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user-form',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./user-form.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/user-form/user-form.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./user-form.component.css */ "./src/app/user-form/user-form.component.css")).default]
    })
], UserFormComponent);



/***/ }),

/***/ "./src/app/users-panel/users-panel.component.css":
/*!*******************************************************!*\
  !*** ./src/app/users-panel/users-panel.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".mat-form-field {\r\n    margin: 1em;\r\n    display: block;\r\n    position: relative;\r\n    text-align: center;\r\n  }\r\n\r\n.form-wrapper{\r\n    justify-content: center !important;\r\n}\r\n\r\ntd.mat-cell, td.mat-footer-cell, th.mat-header-cell {\r\n    padding: 0;\r\n    border-bottom-width: 1px;\r\n    border-bottom-style: none;\r\n}\r\n\r\n.card {\r\n    margin-top: 30px;\r\n    margin-bottom: 40px;\r\n    margin-right: auto;\r\n    margin-left: auto;\r\n    position: relative;\r\n    display: flex;\r\n    flex-direction: column;\r\n    min-width: 0;\r\n    padding: 10px;\r\n    word-wrap: break-word;\r\n    background-color: #fff;\r\n    background-clip: border-box;\r\n    border: 2px solid rgb(94, 49, 144);\r\n    border-radius: .25rem;\r\n    box-shadow: 0 8px 2px var(--shadow-2);\r\n  }\r\n\r\n.card-header:first-child {\r\n    border-radius: calc(.25rem - 1px) calc(.25rem - 1px) 0 0;\r\n  }\r\n\r\n.inline-date{\r\n      display: inline-block;\r\n  }\r\n\r\n.inl-wrapper{\r\n    justify-content: center !important;\r\n  }\r\n \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlcnMtcGFuZWwvdXNlcnMtcGFuZWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLGtCQUFrQjtFQUNwQjs7QUFFRjtJQUNJLGtDQUFrQztBQUN0Qzs7QUFDQTtJQUNJLFVBQVU7SUFDVix3QkFBd0I7SUFDeEIseUJBQXlCO0FBQzdCOztBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUVsQixhQUFhO0lBR2Isc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWixhQUFhO0lBQ2IscUJBQXFCO0lBQ3JCLHNCQUFzQjtJQUN0QiwyQkFBMkI7SUFDM0Isa0NBQWtDO0lBQ2xDLHFCQUFxQjtJQUNyQixxQ0FBcUM7RUFDdkM7O0FBRUE7SUFDRSx3REFBd0Q7RUFDMUQ7O0FBRUE7TUFDSSxxQkFBcUI7RUFDekI7O0FBQ0E7SUFDRSxrQ0FBa0M7RUFDcEMiLCJmaWxlIjoic3JjL2FwcC91c2Vycy1wYW5lbC91c2Vycy1wYW5lbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC1mb3JtLWZpZWxkIHtcclxuICAgIG1hcmdpbjogMWVtO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuLmZvcm0td3JhcHBlcntcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XHJcbn1cclxudGQubWF0LWNlbGwsIHRkLm1hdC1mb290ZXItY2VsbCwgdGgubWF0LWhlYWRlci1jZWxsIHtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBib3JkZXItYm90dG9tLXdpZHRoOiAxcHg7XHJcbiAgICBib3JkZXItYm90dG9tLXN0eWxlOiBub25lO1xyXG59XHJcbi5jYXJkIHtcclxuICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xyXG4gICAgLXdlYmtpdC1ib3gtZGlyZWN0aW9uOiBub3JtYWw7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgbWluLXdpZHRoOiAwO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBiYWNrZ3JvdW5kLWNsaXA6IGJvcmRlci1ib3g7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZ2IoOTQsIDQ5LCAxNDQpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogLjI1cmVtO1xyXG4gICAgYm94LXNoYWRvdzogMCA4cHggMnB4IHZhcigtLXNoYWRvdy0yKTtcclxuICB9XHJcbiAgXHJcbiAgLmNhcmQtaGVhZGVyOmZpcnN0LWNoaWxkIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IGNhbGMoLjI1cmVtIC0gMXB4KSBjYWxjKC4yNXJlbSAtIDFweCkgMCAwO1xyXG4gIH1cclxuXHJcbiAgLmlubGluZS1kYXRle1xyXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgfVxyXG4gIC5pbmwtd3JhcHBlcntcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIl19 */");

/***/ }),

/***/ "./src/app/users-panel/users-panel.component.ts":
/*!******************************************************!*\
  !*** ./src/app/users-panel/users-panel.component.ts ***!
  \******************************************************/
/*! exports provided: UsersPanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersPanelComponent", function() { return UsersPanelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/users.service */ "./src/app/services/users.service.ts");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");







let UsersPanelComponent = class UsersPanelComponent {
    constructor(userService, fb, snackBar) {
        this.userService = userService;
        this.fb = fb;
        this.snackBar = snackBar;
        this.displayedColumns = ["userId", "userName", "email", "actions"];
        this.activePageDataChunk = [];
        this.pageSize = 5;
    }
    ngOnInit() {
        this.userFilterForm = this.fb.group({
            UserName: ['', []],
            Email: ['', []]
        });
        this.userService.getUsers()
            .subscribe(data => {
            this.users = data;
            this.usersCount = data.length;
            this.activePageDataChunk = data.slice(0, this.pageSize);
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](this.activePageDataChunk);
            this.dataSource.paginator = this.paginator;
        });
    }
    onPageChanged(e) {
        let firstCut = e.pageIndex * e.pageSize;
        let secondCut = firstCut + e.pageSize;
        this.activePageDataChunk = this.users.slice(firstCut, secondCut);
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](this.activePageDataChunk);
    }
    applyFilter(event) {
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](this.users);
        const filterValue = event.target.value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }
    deleteUser(userId) {
        this.userService.deleteUser(userId)
            .subscribe(data => {
            if (data['status'] === 1) {
                this.openSnackBar(data["message"], 'Close', 'red-snackbar');
            }
            else {
                this.openSnackBar('User deleted successfully', 'Close', 'green-snackbar');
                var filteredList = this.users.filter(user => user.userId !== userId);
                this.users = filteredList;
                this.usersCount = this.users.length;
                this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](this.users.slice(0, this.pageSize));
            }
        });
    }
    openSnackBar(message, action, className) {
        this.snackBar.open(message, action, {
            duration: 2000,
            panelClass: [className]
        });
    }
    applyFilters() {
        var filterObj = {};
        if (this.userFilterForm.controls["UserName"].value) {
            filterObj["UserName"] = this.userFilterForm.controls["UserName"].value;
        }
        if (this.userFilterForm.controls["Email"].value) {
            filterObj["Email"] = this.userFilterForm.controls["Email"].value;
        }
        this.userService.getUsersFilter(filterObj)
            .subscribe(data => {
            this.users = data;
            this.usersCount = data.length;
            this.activePageDataChunk = data.slice(0, this.pageSize);
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](this.activePageDataChunk);
            this.paginator.firstPage();
        });
    }
};
UsersPanelComponent.ctorParameters = () => [
    { type: _services_users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
    { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"])
], UsersPanelComponent.prototype, "paginator", void 0);
UsersPanelComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-users-panel',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./users-panel.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/users-panel/users-panel.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./users-panel.component.css */ "./src/app/users-panel/users-panel.component.css")).default]
    })
], UsersPanelComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    apiUrl: "https://ph-libraryapp.azurewebsites.net/"
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\wolfr\Documents\Repository\LibraryApp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map