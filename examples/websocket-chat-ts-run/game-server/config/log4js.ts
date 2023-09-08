module.exports = {
    'appenders': {
        'console': {
            'type': 'console'
        },
        'con-log': {
            'type': 'file',
            'filename': '${opts:base}/logs/con-log-${opts:serverId}.log',
            'pattern': 'connector',
            'maxLogSize': 1048576,
            'layout': {
                'type': 'basic'
            },
            'backups': 5
        },
        'rpc-log': {
            'type': 'file',
            'filename': '${opts:base}/logs/rpc-log-${opts:serverId}.log',
            'maxLogSize': 1048576,
            'layout': {
                'type': 'basic'
            },
            'backups': 5
        },
        'forward-log': {
            'type': 'file',
            'filename': '${opts:base}/logs/forward-log-${opts:serverId}.log',
            'maxLogSize': 1048576,
            'layout': {
                'type': 'basic'
            },
            'backups': 5
        },
        'rpc-debug': {
            'type': 'file',
            'filename': '${opts:base}/logs/rpc-debug-${opts:serverId}.log',
            'maxLogSize': 1048576,
            'layout': {
                'type': 'basic'
            },
            'backups': 5
        },
        'crash-log': {
            'type': 'file',
            'filename': '${opts:base}/logs/crash.log',
            'maxLogSize': 1048576,
            'layout': {
                'type': 'basic'
            },
            'backups': 5
        },
        'admin-log': {
            'type': 'file',
            'filename': '${opts:base}/logs/admin.log',
            'maxLogSize': 1048576,
            'layout': {
                'type': 'basic'
            },
            'backups': 5
        },
        'omelop': {
            'type': 'file',
            'filename': '${opts:base}/logs/omelop-${opts:serverId}.log',
            'maxLogSize': 1048576,
            'layout': {
                'type': 'basic'
            },
            'backups': 5
        },
        'omelop-admin': {
            'type': 'file',
            'filename': '${opts:base}/logs/omelop-admin.log',
            'maxLogSize': 1048576,
            'layout': {
                'type': 'basic'
            },
            'backups': 5
        },
        'omelop-rpc': {
            'type': 'file',
            'filename': '${opts:base}/logs/omelop-rpc-${opts:serverId}.log',
            'maxLogSize': 1048576,
            'layout': {
                'type': 'basic'
            },
            'backups': 5
        }
    },

    'categories': {
        'default': {
            'appenders': ['console', 'omelop'],
            'level': 'debug'
        },
        'con-log': {
            'appenders': ['con-log'],
            'level': 'debug'
        },
        'rpc-log': {
            'appenders': ['rpc-log'],
            'level': 'debug'
        },
        'forward-log': {
            'appenders': ['forward-log'],
            'level': 'debug'
        },
        'rpc-debug': {
            'appenders': ['rpc-debug'],
            'level': 'debug'
        },
        'crash-log': {
            'appenders': ['crash-log'],
            'level': 'debug'
        },
        'admin-log': {
            'appenders': ['admin-log'],
            'level': 'debug'
        },
        'omelop-admin': {
            'appenders': ['omelop-admin'],
            'level': 'debug'
        },
        'omelop-rpc': {
            'appenders': ['omelop-rpc'],
            'level': 'debug'
        },

    },

    'prefix': '${opts:serverId} ',
    'replaceConsole': true,
    'lineDebug': false,
    'errorStack': true
};
