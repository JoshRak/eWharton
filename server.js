var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
fs = require('fs');
var app = express();


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//app.use(cookierParser('abcdef-12345'))

app.use(express.static('docs'));

// app.use(['/julie', '/book', '/amanda', '/instructors', '/invite', '/nefertiti', '/ariel', '/terms', '/privacy', '/bergen', '/dori', '/edell', '/lucian', '/about', '/whatisbande'], function(req, res, next) {
//     //if they have auth cookie continue
//     console.log("here");
//     console.log(req.session.user);
//     if (req.session.user) {
//         next();
//     } else {
//         res.redirect("/");
//     }
// })

app.get('/', function(req, res) {
    res.send("Hello World");
});


function emailValidate(email) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

app.post('/sendEmailWait', function(req, res) {
    console.log(req.body);
    let ref = db.ref("Waitlist");

    if (emailValidate(req.body["email"].trim())) {
        ref.push({
            email: req.body["email"].trim(),
            date: new Date().toISOString(),
            accessCode: "",
            name: req.body["name"].trim(),
            sendDate: ""
        });
        sendEmailWait(req.body["email"].trim(), req.body["name"].trim(), res);

    } else {
        res.send("fail");
    }

});

app.post('/sendEmailInvite', function(req, res) {

    console.log(req.body);
    if (emailValidate(req.body["email"].trim())) {
        let ref = db.ref("Invites");
        let accessCode;
        if (req.session.code) {
            accessCode = req.session.code;
        } else {
            accessCode = "playfitbande";
        }
        ref.push({
            name: req.body["name"].trim(),
            friendName: req.body["friendName"].trim(),
            friendEmail: req.body["email"].trim(),
            code: accessCode
        });
        sendEmailInvite(req.body["email"].trim(), req.body["name"].trim(), req.body["friendName"].trim(), accessCode, res);
    } else {
        res.send("fail");
    }
});

app.get('/waitList', function(req, res) {
    res.sendFile(path.join(__dirname + '/v2/waitList.html'));
});

app.get('/book', function(req, res) {
    res.sendFile(path.join(__dirname + '/v2/book.html'));
});

app.get('/invite', function(req, res) {
    res.sendFile(path.join(__dirname + '/v2/invite.html'));
});

app.get('/instructors', function(req, res) {
    res.sendFile(path.join(__dirname + '/v2/instructors.html'));
});

app.get('/ariel', function(req, res) {
    res.sendFile(path.join(__dirname + '/v2/ariel.html'));
});

app.get('/participationAgreement', function(req, res) {
    res.sendFile(path.join(__dirname + '/v2/participationAgreement.html'));
});

app.get('/julie', function(req, res) {
    res.sendFile(path.join(__dirname + '/v2/julie.html'));
});

app.get('/nicole', function(req, res) {
    res.sendFile(path.join(__dirname + '/v2/nicole.html'));
});

app.get('/amanda', function(req, res) {
    res.sendFile(path.join(__dirname + '/v2/amanda.html'));
});

app.get('/support', function(req, res) {
    res.sendFile(path.join(__dirname + '/v2/support.html'));
});

app.get('/dori', function(req, res) {
    res.sendFile(path.join(__dirname + '/v2/dori.html'));
});


app.get('/edell', function(req, res) {
    res.sendFile(path.join(__dirname + '/v2/edell.html'));
});

app.get('/nefertiti', function(req, res) {
    res.sendFile(path.join(__dirname + '/v2/nefertiti.html'));
});

app.get('/bergen', function(req, res) {
    res.sendFile(path.join(__dirname + '/v2/bergen.html'));
});

app.get('/lucian', function(req, res) {
    res.sendFile(path.join(__dirname + '/v2/lucian.html'));
});


app.get('/waiver', function(req, res) {
    res.sendFile(path.join(__dirname + '/v2/waiver.html'));
});

app.get('/terms', function(req, res) {
    res.sendFile(path.join(__dirname + '/v2/terms.html'));
});

app.get('/privacy', function(req, res) {
    res.sendFile(path.join(__dirname + '/v2/privacy.html'));
});

app.get('/about', function(req, res) {
    res.sendFile(path.join(__dirname + '/v2/about.html'));
});

app.get('/whatisbande', function(req, res) {
    res.sendFile(path.join(__dirname + '/v2/whatisbande.html'));
});

app.get('/home', function(req, res) {
    if (req.session.user) {
        res.sendFile(path.join(__dirname + '/v2/book.html'));
    } else {
        res.sendFile(path.join(__dirname + '/v2/landing.html'));
    }
});
/*app.get('/instructors', function(req, res) {
    res.sendFile(path.join(__dirname + '/protected/instructors.html'));
});*/

/*app.get('/invite', function(req, res) {
    res.sendFile(path.join(__dirname + '/protected/invite.html'));
});*/

// function log(req, status) {
//     console.log(req.body)

//     let now = new Date();
//     now = now.getTime();
//     fs.writeFile(__dirname + `/logs/${now}.txt`, req.body["token"] + " / " + status, function(err, result) {
//         if (err) console.log('error', err);
//     });
// }


// app.post('/authUser', function(req, res) {
//     if (req.body["token"].toLowerCase().trim() == "playfitbande") {
//         req.session.user = "authenticated";
//         //log(req, "success");
//         res.send("success");
//     } else {
//         //log(req, "fail")
//         res.send("fail");
//     }
// });

app.post('/authUser', function(req, res) {
    console.log(req.body);
    let ref = db.ref("Codes");
    ref.once("value")
        .then(function(snapshot) {
            let hasCode = (snapshot.hasChild(req.body["token"].toLowerCase().trim()));
            if (req.body["token"].toLowerCase().trim() == "playfitbande" || hasCode) {
                req.session.user = "authenticated";
                req.session.code = req.body["token"].toLowerCase().trim();
                res.send("success");
            } else
                res.send("failed");
        });

});

app.listen(3000);