from flask import Flask, jsonify, request, Response
from flask_pymongo import PyMongo


from bson import json_util
from bson.objectid import ObjectId


app = Flask(__name__)


app.config['MONGO_URI'] = 'mongodb://localhost:30001/pruba'

mongo = PyMongo(app)

#Retorna todos los estudiantes
@app.route('/estudiantes', methods=['GET'])
def get_estudiantes():
    estudiantes = mongo.db.Estudiantes.find()
    response = json_util.dumps(estudiantes)
    return Response(response, mimetype="application/json")

#Retorna la clave de un usuario
@app.route('/estudiantes/<usuario>', methods=['GET'])
def get_estudiante_usuario(usuario):
    estudiantes = mongo.db.Estudiantes.find_one({'usuario': usuario, },{"_id":0,"clave":1})
    response = json_util.dumps(estudiantes)
    return Response(response, mimetype="application/json")

#Retorna los aportes de un usuario
@app.route('/estudiantes/aportes/<usuario>', methods=['GET'])
def get_estudiante_aportes(usuario):
    estudiantes = mongo.db.Estudiantes.find_one({'usuario': usuario, },{"_id":0,"aportes":1})
    response = json_util.dumps(estudiantes)
    return Response(response, mimetype="application/json")

@app.route('/estudiantes', methods=['POST'])
def post_estudiante():
        # Receiving Data
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

    if usuario and aportes:
        mongo.db.Estudiantes.update_one(
            {'usuario': usuario}, {'$set': {'aportes': aportes}})
        response = jsonify({'message ': 'Usuario ' + usuario + ' Updated Successfuly'})
        response.status_code = 200
        return response
    else:
      return not_found()


# Retorna todos los cursos en la BD
@app.route('/cursos', methods=['GET'])
def get_cursos():
        cursos = mongo.db.Cursos.find()
        response = json_util.dumps(cursos)
        return Response(response, mimetype="application/json")


#---------------------------------Metodos administrador------------------------------

#Retorna la clave de un administrador
@app.route('/admin/<usuario>', methods=['GET'])
def get_admin_clave(usuario):
    estudiantes = mongo.db.Administradores.find_one({'usuario': usuario, },{"_id":0,"clave":1})
    response = json_util.dumps(estudiantes)
    return Response(response, mimetype="application/json")


@app.route('/admin', methods=['POST'])
def post_admin():
        # Receiving Data

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

