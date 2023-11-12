import mysql.connector
import os

images = os.listdir('./public/auth/img/mnist')
print(images[0:10])

if input("insert these items? (true/false)"):
    cnx = mysql.connector.connect(user='root', host='127.0.0.1', database='mnist')
    cursor = cnx.cursor()

    for i in images:
        insertstring = "insert into tests (url, correct) values ("+"'auth/img/mnist/"+i+"', "+i[0]+")"
        print(insertstring)
        cursor.execute(insertstring)

    cnx.commit()
    cursor.close()
    cnx.close()
