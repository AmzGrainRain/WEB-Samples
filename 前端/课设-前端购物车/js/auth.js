function isLogin() {
    return sessionStorage.getItem("loggedIn") || "";
}

function regist(name, password) {
    var userList = JSON.parse(localStorage.getItem("userList")) || [];
    userList.push({
        name,
        password,
    });

    localStorage.setItem("userList", JSON.stringify(userList));
}

function login(name, password) {
    var userList = JSON.parse(localStorage.getItem("userList")) || [];
    var index = userList.findIndex((user) => user.name === name);
    if (index === -1) return -1;
    if (userList[index].password !== password) return 1;
    return 0;
}

function getVfCodeHTML() {
    var codeImageList = [
        "data:image/gif;base64,R0lGODdhEwAUAMQAAAQCNGSaBJyaNJwCZJzOLJxmNPwyzMzOnPwCBPzO1GQCzDTOnAQCzMyaNMwyZJz+zPwCZPz+/GT+/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACwAAAAAEwAUAAAFV2AkjmQZPaYIpGzrRhAim4rBItEwRzJuJryRb7gjDUXFoJGAbBpLvV3UGQkolT5eVihkXL9aJ+IwKmzD2B61qb62uUjB+ZyamxZPkWMNpYNTDUhJKRIvIQA7",
        "data:image/gif;base64,R0lGODdhEwAUAMQAAAQCNASaBPymBJxmnATONCxmZGSaNAQy/ATO/DSaZPz+/GRmZMzSNNQynGQCnGTOnGQyNDSaBPyqBDTONDRmZGSeZAT+nDSanGRmzPxmnGQyzAAAAAAAAAAAAAAAAAAAACwAAAAAEwAUAAAFUaCiOCIjnpQynGzrvjAMvZIkCHbdRrAUx77fqWbD5YKxlI2lUQBYFlFGtBSKEIqgjwC7sJDIRQ8pEvzIX6t6nXhN1pXXYX0y0IUNRSD2eGEUIQA7",
        "data:image/gif;base64,R0lGODdhEwAUAMQAAAQCBGSaNJwyZJyaNDRmZJxmBAQu/ATOLGQuNIwC/ATS/JzSBJxmnGTOnMwynGQyLPxmnGT+/AQCNDSanJwynPyaNGRmzGQy1JQC/Pz+/JxmzGTO/GQyNAAAAAAAAAAAACwAAAAAEwAUAAAFWGAmikTGjGORTWjrvrDIjUD8Apv9Unq/jgPdjPS6ZCQviMjhEylch6YIQ61SdQkXRgbbtrwZzQs8Ike01ETau+hqY4YMeVpBCUSB6dtmxaizMA1yLRZzGSEAOw==",
        "data:image/gif;base64,R0lGODdhEwAUAMQAAAQCBDSaNMwyBMyaNJxmBDTOnGRmBCyenJzOBPwCZJxmnGQyLEy+DPzOzJwyZGT+/ARmzJxmzDQynGSaBPyaLNRmNGTS/GSazJzONNQynGQyNEy+FPz+/JwynGRmnJxm1CwAAAAAEwAUAAAFbCBHcAdnnmiqriyAGuwJWKrAJlzHfvGamZJUI6VRQXooBmOTYpowqeVJaWL0rKaPlDFZbTZKZYBjxaKK1ZOT46ygItW105x6UM1MuglRLUdZeSZgS0prFFMOTAocHmocBYArelEDKms9F0koIQA7",
        "data:image/gif;base64,R0lGODdhEwAUAMQAAAQCNDSeBJyaNJwCZDTONMzONGRmnJxmLATe/GQCnJz+zGT+/PwuzAT+nAQC1DSanMyaNMwyZMzSZMxm/ATi/GQCzPz+/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACwAAAAAEwAUAAAFXqAljqRCJmIBkGzrWkgbv+JcMbU7jDOJBDRYDUEhIo49SxHJSlomLIosKGyOGq4jDLl0WhzaHM/y8MV6h553Jh0rSRKDrxlmCcQ8r5UnTRLyCBFMgHt1VBBULAuJLCEAOw==",
        "data:image/gif;base64,R0lGODdhEwAUAMQAAAQy/DSaBJyaNMwyZDSanMzONJwuzGSaNMzOnNQynDRmZGQCnATOBPymBGTOnPz+/PxmnJxmNATO/MzOZMxm/GSeZJz+zPwyzGQCzDTSNPyqBAAAAAAAAAAAAAAAAAAAACwAAAAAEwAUAAAFU+Ajitb4LGJhrmzrjto7Yhf8xLKpBSIua75e8MFgARvAB4UwEuRMChdSg2xYNRBR4hXzSXK+oQgxityujduzNVm73+4MayAymCotAPxx2PtHDg8hADs=",
        "data:image/gif;base64,R0lGODdhEwAUAMQAAAQCNGSaBJwyNExGRJyaNMxmNARm1DTOZPwCZGRmBJwCZExKRJzSNGT+/JxmnGTOZAQCzMwuBExGTMyaNGRmnDTOnMwynExKTPz+/JxizAAAAAAAAAAAAAAAAAAAAAAAACwAAAAAEwAUAAAFbiAmjmRpniVQJmgrRi3SZi6mkNa1XNLF68DdxWQgDWumxYjRGvR2EmEPdRQNAiMl6SB6enVTDKRUxRwLGK2pzKYuopfBG9iqlkUE08MswfRRAhgOGBQiCwMiFUgiPj5qJRNpAz4lPUCRI3cmDSMhADs=",
        "data:image/gif;base64,R0lGODdhEwAUANUAAAQCBASaBJwyNMyaNDSanDRmZEy6DJwynJxinCwynATONARmzJzOBGTOZGQyNDSaNJxmBGTO/GRmBEy+DMwunJxmzAQCNNQuBPyaNGSazJxmnGQy1DTOZGRmnPz+/DSaZGRmZEy+FMwynAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACwAAAAAEwAUAAAGd8CCR+MpGiEegnHJbDqdDiNgKXlKI82L1XN4VrZNUTEBjjIXy43HYgxN3taQcSL31JsKz8S5X37nIHZtRhxFD0t0cB4OBlsGdXcVBm93iEV7bopPEx+CHgyecXpMlQ1NbhiIAkMeHXxuc1siBgFzdB4DVn1PGR5BADs=",
        "data:image/gif;base64,R0lGODdhEwAUAMQAAAQCNGSaBJyaNJwCZDTOnGT+/BTS7JzONJxmNBzS7PwCZJz+1BzW7GRmnPzOzAQCzMyaNJwyzBTS9MxmLBzS9PwyzBzW9Pz+/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACwAAAAAEwAUAAAFZuAljmQpLqYIpGzrXoqRpFSVytRQzqnDXBTDaEZhFUfHIm8nOoh4RYuJkjiKjsRUIGGRMCRQoHF4eVykv1RiIpJexYjp05qliRokJWt5EZDcckMSZCkEVVRHDBRFES+OLBCPIwUuIQA7",
        "data:image/gif;base64,R0lGODdhEwAUAMQAAGQCnDSaBMwunJyaNCxmZATONExGRDSaZPxmnGRmZJxmnGTOnExKRMzONAT+nGSaZGQyzGSaNMwynDRmZDTSNExGTDSanMxm/ExKTPz+/AAAAAAAAAAAAAAAAAAAAAAAACwAAAAAEwAUAAAFYWAmAmIjnlOmnGzrvnAsy8Fs3+5lnQOepS6IyyFCiCQnzEwpYlQwBZjlmWEomafEi5GpiLAyLvNZMYBZSq+hyo5hzJh0BntwVSjrb/f1aFa4VHMyVxkRXIKDXnF6RzMLMCEAOw==",
    ];
    var codeTextList = [
        "明",
        "天",
        "日",
        "科",
        "技",
        "会",
        "更",
        "好",
        "创",
        "新",
    ];

    let htmlCode = "";
    let vfcodeAnswer = "";
    for (let i = 0; i < 4; ++i) {
        const n = Math.floor(Math.random() * codeImageList.length);
        vfcodeAnswer += codeTextList[n];
        htmlCode += `<img src="${codeImageList[n]}" width="36" height="36">`;
    }
    sessionStorage.setItem("vfcodeAnswer", vfcodeAnswer);

    return htmlCode;
}

function vfVfCode(code) {
    var vfcodeAnswer = sessionStorage.getItem("vfcodeAnswer") || "";
    return vfcodeAnswer === code;
}
