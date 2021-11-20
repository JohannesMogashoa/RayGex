# RayGex

This is a package that simplifies the need of a developer to look up certain common regex expressions like email validity and password amongst others.

## Expressions Offered

This package offers the following easy to use functions:

- Email
- Password
- South African ID
- Visa Card Number
- Visa Master Card Number
- Mastercard Number
- Username Profanity Check

More features and expressions will be added as time goes

## Usage Example

**Step One: Installation**

```
    npm install raygex | yarn add raygex
```

**Step Two: Import**

```
    import {validateEmail, validatePassword} from "raygex";
```

**Step Three: Use It**

```
    const isEmailValid = (email) => {
	    console.log(validateEmail(email));

	    //Output (true): 	This is a valid email address
	    //Output (false):	This is not a valid email address
	}
```

Developed By: [Johannes "Kode Stallion" Mogashoa](https://johannesmogashoa.co.za)