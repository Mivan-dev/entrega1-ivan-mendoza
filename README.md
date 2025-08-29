# Student Management System - Entregable 1

Sistema de gestión de estudiantes desarrollado con Angular 20, que permite administrar estudiantes, cursos e inscripciones* con diferentes niveles de acceso según el rol del usuario.

## 🚀 Características

- **Gestión de Estudiantes**: Ver, agregar y eliminar estudiantes
- **Gestión de Cursos**: Administrar cursos disponibles  
- **Sistema de Inscripciones**: Gestionar inscripciones de estudiantes a cursos (en desarrollo)
- **Autenticación y Autorización**: Login con roles de usuario y administrador
- **Validación de Formularios**: Validación reactiva con mensajes de error detallados
- **Guards de Seguridad**: Protección de rutas según autenticación y rol
- **Componentes Reutilizables**: Directivas, pipes y guards personalizados

## 🛠️ Tecnologías Utilizadas

- **Frontend**: Angular 20
- **Estilos**: Bootstrap 5, SCSS, Angular Material
- **Formularios**: Angular Reactive Forms
- **Testing**: Jasmine + Karma
- **Base de Datos**: MockApi

## 📋 Prerequisitos

- Node 18+
- Angular CLI

## 🔧 Instalación

1. **Clonar el repositorio**
```bash
git clone <https://github.com/Mivan-dev/entrega1-ivan-mendoza.git>
cd entregable-1
```

2. **Instalar dependencias**
```bash
npm install
```

3. **Iniciar el servidor de desarrollo**
```bash
ng serve
```

4. **Abrir en el navegador**
```
http://localhost:4200
```

## 👤 Usuarios de Prueba

| Usuario | Contraseña | Rol |
|---------|------------|-----|
| admin   | admin123   | Administrador |
| user    | user123    | Usuario |

## 🏗️ Estructura del Proyecto

```
src/
├── app/
│   ├── core/                    # Servicios principales
│   │   └── auth/               # Servicio de autenticación (deprecated)
│   ├── feature/                # Módulos de funcionalidad
│   │   ├── alumnos/           # Gestión de estudiantes
│   │   ├── cursos/            # Gestión de cursos
│   │   ├── inscripciones/     # Gestión de inscripciones
│   │   └── login/             # Autenticación
│   └── layout/                # Componentes de layout
│   │   ├── toolbar/           # Barra superior
│   │   ├── navbar/            # Navegación lateral
│   │   └── footer/            # Pie de página
│   └─ ngrx/                   # Manejo de estados
│       └─ auth/               # actions, reducer, selectors, model (persistencia)
├── shared/                    # Elementos compartidos
│   ├── directives/           # Directivas personalizadas
│   ├── pipes/               # Pipes personalizados
│   ├── guards/              # Guards de ruta
│   ├── entities.ts          # Interfaces y tipos
│   └── routes.ts            # Enums de rutas
└── db.json                  # Base de datos local (deprecated)
```

## 🔐 Funcionalidades por Rol

### Usuario Regular
- ✅ Ver lista de estudiantes
- ✅ Ver lista de cursos
- ✅ Ver inscripciones
- ❌ Editar estudiantes
- ❌ Eliminar estudiantes

### Administrador
- ✅ Todas las funcionalidades de usuario
- ✅ Agregar estudiantes
- ✅ Editar estudiantes
- ✅ Eliminar estudiantes
- ✅ Gestión completa de cursos

## 🧪 Testing

**Ejecutar todos los tests**
```bash
ng test
```

**Tests incluidos:**
- Servicio de autenticación (Auth)
- Pipes personalizados (FullName)

## 🔄 Flujo de la Aplicación

1. **Login**: Usuario ingresa credenciales
2. **Validación**: Sistema verifica usuario y rol
3. **Dashboard**: Redirección según rol del usuario
4. **Navegación**: Acceso a funcionalidades según permisos
5. **CRUD Operations**: Operaciones según nivel de acceso

## 🛡️ Validaciones Implementadas

### Formulario de Login
- Usuario: 4-12 caracteres, solo letras, números y ._-
- Contraseña: 6-12 caracteres

### Formulario de Estudiantes
- Nombre: Solo letras, mínimo 2 caracteres
- Apellido: Solo letras, mínimo 2 caracteres  
- DNI: Solo números, hasta 8 dígitos
- Edad: Solo números, mayor a 0
- Promedio: Números decimales entre 0 y 10

## 👨‍💻 Autor

**Iván M**  
Proyecto desarrollado para CoderHouse


