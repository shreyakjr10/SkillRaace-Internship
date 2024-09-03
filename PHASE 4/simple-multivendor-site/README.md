# Django Simple Multi-Vendor Website with Payment
This is a simple MultiVendor e-commerce website built with Django (Ptyhon).

In this website, Vendors (Stores) can register and add their products.

And Users can visit the product and order by paying with Debit/Credit Card (Stripe is Used).

Then Vendor gets the email notification about the order and should deliver the product to the customer based on the address details.

## Features of this Project

### A. Admin Users Can
1. Manage Category (Add, Update, Filter and Delete)
2. Manage Products (Add, Update, Filter and Delete)
3. Manage Users (Update, Filter and Delete)
4. Manage Orders (View and Process)

### B. Vendors Can
1. Add Products
2. Update Profile
3. Gets Notification When an Order is made by Users
4. Get Orders and Manage Them


### C.  Users Can Can
1. Add to Cart
2. Pay with Debit/Credit Card and Order
3. While Checkout, User should give the address to deliver
4. Get Email Notification about the confirmation of the order

### Installation
**1. Create a Folder where you want to save the project**

**2. Create a Virtual Environment and Activate**

Install Virtual Environment First
```
$  pip install virtualenv
```

Create Virtual Environment

For Windows
```
$  python -m venv venv
```


Activate Virtual Environment

For Windows
```
$  source venv/scripts/activate
```


Command for PC:
```python
$ python manage.py runserver
```
