import random

from flask import Flask, jsonify, request, Response
from flask_pymongo import PyMongo


from bson import json_util
from bson.objectid import ObjectId


app = Flask(__name__)

puertos=[30000,30001,30002]




#Retorna todos los estudiantes
@app.route('/estudiantes', methods=['GET'])
def get_estudiantes():
    puerto = puertos[random.randint(0, 2)]
    print(puerto)
    app.config['MONGO_URI'] = 'mongodb://localhost:'+str(puerto)+'/clubesDB'

    mongo = PyMongo(app)

    estudiantes = mongo.db.Estudiantes.find()
    response = json_util.dumps(estudiantes)
    return Response(response, mimetype="application/json")

#Retorna la clave de un usuario
@app.route('/estudiantes/<usuario>', methods=['GET'])
def get_estudiante_usuario(usuario):
    puerto = puertos[random.randint(0, 2)]
    print(puerto)
    app.config['MONGO_URI'] = 'mongodb://localhost:' + str(puerto) + '/clubesDB'

    mongo = PyMongo(app)
    estudiantes = mongo.db.Estudiantes.find_one({'usuario': usuario, },{"_id":0,"clave":1})
    response = json_util.dumps(estudiantes)
    return Response(response, mimetype="application/json")

#Retorna los aportes de un usuario
@app.route('/estudiantes/aportes/<usuario>', methods=['GET'])
def get_estudiante_aportes(usuario):
    puerto = puertos[random.randint(0, 2)]
    print(puerto)
    app.config['MONGO_URI'] = 'mongodb://localhost:' + str(puerto) + '/clubesDB'

    mongo = PyMongo(app)
    estudiantes = mongo.db.Estudiantes.find_one({'usuario': usuario, },{"_id":0,"aportes":1})
    response = json_util.dumps(estudiantes)
    return Response(response, mimetype="application/json")

@app.route('/estudiantes', methods=['POST'])
def post_estudiante():
        puerto = puertos[random.randint(0, 2)]
        print(puerto)
        app.config['MONGO_URI'] = 'mongodb://localhost:' + str(puerto) + '/clubesDB'

        mongo = PyMongo(app)
        nombre = request.json['nombre']
        usuario = request.json['usuario']
        clave = request.json['clave']
        seccion = request.json['seccion']


        if nombre and usuario and clave:

            id = mongo.db.Estudiantes.insert_one(
                {'nombre': nombre, 'usuario': usuario, 'clave': clave,'seccion': seccion, 'aportes': 0})
            response = jsonify({
                '_id': str(id),
                'nombre': nombre,
                'usuario': usuario,
                'clave': clave,
                'seccion': seccion,
                'aportes': 0
            })
            response.status_code = 201
            return response
        else:
            return not_found()

@app.route('/estudiantes/<usuario>', methods=['PUT'])
def update_user(usuario):
    aportes = request.json['aportes']

    puerto = puertos[random.randint(0, 2)]
    print(puerto)
    app.config['MONGO_URI'] = 'mongodb://localhost:' + str(puerto) + '/clubesDB'

    mongo = PyMongo(app)

    if usuario and aportes:
        mongo.db.Estudiantes.update_one(
            {'usuario': usuario}, {'$set': {'aportes': aportes}})
        response = jsonify({'message ': 'Usuario ' + usuario + ' Updated Successfuly'})
        response.status_code = 200
        return response
    else:
      return not_found()

#-----------------Metodos Cursos------------------------
# Retorna todos los cursos en la BD
@app.route('/cursos', methods=['GET'])
def get_cursos():
        puerto = puertos[random.randint(0, 2)]
        print(puerto)
        app.config['MONGO_URI'] = 'mongodb://localhost:' + str(puerto) + '/clubesDB'

        mongo = PyMongo(app)
        cursos = mongo.db.Cursos.find()
        response = json_util.dumps(cursos)
        return Response(response, mimetype="application/json")


@app.route('/cursos', methods=['POST'])
def post_curso():
        puerto = puertos[random.randint(0, 2)]
        print(puerto)
        app.config['MONGO_URI'] = 'mongodb://localhost:' + str(puerto) + '/clubesDB'

        mongo = PyMongo(app)
        nombre = request.json['nombre']
        categoria = request.json['categoria']
        estudiante = request.json['estudiante']



        if nombre and categoria and estudiante:

            id = mongo.db.Cursos.insert_one(
                {'nombre': nombre, 'categoria': categoria, 'estudiante': estudiante,'interesados': 1})
            response = jsonify({
                '_id': str(id),
                'nombre': nombre,
                'categoria': categoria,
                'estudiante': estudiante,
                'interesados': 1
            })
            response.status_code = 201
            return response
        else:
            return not_found()

#Retorna los aportes de un usuario
@app.route('/cursos/interesados/<nombre>', methods=['GET'])
def get_cursos_interesados(nombre):
    puerto = puertos[random.randint(0, 2)]
    print(puerto)
    app.config['MONGO_URI'] = 'mongodb://localhost:' + str(puerto) + '/clubesDB'

    mongo = PyMongo(app)
    cursos = mongo.db.Cursos.find_one({'nombre': nombre, },{"_id":0,"interesados":1})
    response = json_util.dumps(cursos)
    return Response(response, mimetype="application/json")

#Modifica cantidad de interesados
@app.route('/cursos/<nombre>', methods=['PUT'])
def update_interesados(nombre):
    puerto = puertos[random.randint(0, 2)]
    print(puerto)
    app.config['MONGO_URI'] = 'mongodb://localhost:' + str(puerto) + '/clubesDB'

    mongo = PyMongo(app)
    interesados = request.json['interesados']

    if nombre and interesados:
        mongo.db.Cursos.update_one(
            {'nombre': nombre}, {'$set': {'interesados': interesados}})
        response = jsonify({'message ': 'Materia ' + nombre + ' Updated Successfuly'})
        response.status_code = 200
        return response
    else:
      return not_found()

#---------------------------------Metodos administrador------------------------------

#Retorna la clave de un administrador
@app.route('/admin/<usuario>', methods=['GET'])
def get_admin_clave(usuario):
    puerto = puertos[random.randint(0, 2)]
    print(puerto)
    app.config['MONGO_URI'] = 'mongodb://localhost:' + str(puerto) + '/clubesDB'

    mongo = PyMongo(app)
    estudiantes = mongo.db.Administradores.find_one({'usuario': usuario, },{"_id":0,"clave":1})
    response = json_util.dumps(estudiantes)
    return Response(response, mimetype="application/json")


@app.route('/admin', methods=['POST'])
def post_admin():
        puerto = puertos[random.randint(0, 2)]
        print(puerto)
        app.config['MONGO_URI'] = 'mongodb://localhost:' + str(puerto) + '/clubesDB'

        mongo = PyMongo(app)

        usuario = request.json['usuario']
        clave = request.json['clave']



        if usuario and clave:

            id = mongo.db.Administradores.insert_one(
                {'usuario': usuario, 'clave': clave})
            response = jsonify({
                '_id': str(id),
                'usuario': usuario,
                'clave': clave,
            })
            response.status_code = 201
            return response
        else:
            return not_found()

#------------------Consultas de Administradores---------------------
#Obtiene la cantidad de cursos por categoria
#La estructura es contador:2
@app.route('/cursos/categoria/<categoria>', methods=['GET'])
def get_cons_clases_categoria(categoria):
    puerto = puertos[random.randint(0, 2)]
    print(puerto)
    app.config['MONGO_URI'] = 'mongodb://localhost:' + str(puerto) + '/clubesDB'

    mongo = PyMongo(app)
    contador = mongo.db.Cursos.count_documents({'categoria': categoria})

    res = {

        "contador": contador

    }
    response = json_util.dumps(res)
    return Response(response, mimetype="application/json")


#Retorna los 3 estudiantes con mas aportes
@app.route('/estudiantes/top3', methods=['GET'])
def get_estudiantes_top3():
    puerto = puertos[random.randint(0, 2)]
    print(puerto)
    app.config['MONGO_URI'] = 'mongodb://localhost:' + str(puerto) + '/clubesDB'

    mongo = PyMongo(app)
    estudiantes = mongo.db.Estudiantes.find({},{"_id":0,"nombre":1,"aportes":1}).sort("aportes",-1).limit(3)
    response = json_util.dumps(estudiantes)
    return Response(response, mimetype="application/json")

#Retorna los 5 cursos con mas interes
@app.route('/cursos/top5M', methods=['GET'])
def get_estudiantes_top5_mejores():
    puerto = puertos[random.randint(0, 2)]
    print(puerto)
    app.config['MONGO_URI'] = 'mongodb://localhost:' + str(puerto) + '/clubesDB'

    mongo = PyMongo(app)
    cursos = mongo.db.Cursos.find({},{"_id":0,"nombre":1,"categoria":1,"interesados":1}).sort("interesados",-1).limit(5)
    response = json_util.dumps(cursos)
    return Response(response, mimetype="application/json")


#Retorna los 5 cursos con menos interes
@app.route('/cursos/top5P', methods=['GET'])
def get_estudiantes_top5_peores():
    puerto = puertos[random.randint(0, 2)]
    print(puerto)
    app.config['MONGO_URI'] = 'mongodb://localhost:' + str(puerto) + '/clubesDB'

    mongo = PyMongo(app)
    cursos = mongo.db.Cursos.find({},{"_id":0,"nombre":1,"categoria":1,"interesados":1}).sort("interesados").limit(5)
    response = json_util.dumps(cursos)
    return Response(response, mimetype="application/json")



@app.errorhandler(404)
def not_found(error=None):
    message = {
        'message': 'Resource Not Found ' + request.url,
        'status': 404
    }
    response = jsonify(message)
    response.status_code = 404
    return response

if __name__ == '__main__':
    app.run(debug=True)

