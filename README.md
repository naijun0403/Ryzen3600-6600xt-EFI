# ⚠️ Not maintained!
I no longer use hardware in this configuration; the EFI is valid up to the version listed below, but I no longer plan to maintain it.

# Ryzen3600-6600xt-EFI
My Hackintosh Spec: Ryzen 3600, Radeon 6600xt

## How to build?
By default, this EFI doesn't have any values from the SMBIOS spec. I included a simple script file to make it easy to add them.

You will need a NodeJS environment to install this script file.
Install NodeJS and insert your own SMBIOS spec in secret-properties.json.

Then, in a shell window, type the following command

```shell
node build.js
```

Now enjoy your fun hackintosh!

## Information
```
OpenCorePkg: 1.0.1

My Desktop Spec:
    - CPU: AMD Ryzen 3600
    - GPU: Radeon 6600XT
    - Anything else?
```

## Status
> You can use this, But not maintained currently