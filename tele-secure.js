(function(){
    // Набор зашифрованных системных строк (Telegram API URL и заголовки)
    const _0x1f4e = [
        '\x68\x74\x74\x70\x73\x3a\x2f\x2f\x61\x70\x69\x2e\x74\x65\x6c\x65\x67\x72\x61\x6d\x2e\x6f\x72\x67\x2f\x62\x6f\x74', 
        '\x2f\x73\x65\x6e\x64\x4d\x65\x73\x73\x61\x67\x65', 
        '\x61\x70\x70\x6c\x69\x63\x61\x74\x69\x6f\x6e\x2f\x6a\x73\x6f\x6e'
    ];
    
    // Зашифрованные ключи токена и ID чата назначения
    const _0xa310 = [56, 53, 57, 53, 56, 55, 53, 55, 49, 53];
    const _0xb92e = [53, 51, 48, 53, 50, 54, 49, 100, 49, 48, 49]; 

    // Глобальная функция, которую вызывает index.html при завершении теста
    window['\x73\x65\x6e\x64\x53\x65\x63\x75\x72\x65\x52\x65\x70\x6f\x72\x74'] = function(_usr, _0x1b, _0x2c, _dev) {
        let _0x3d = "";
        _0xa310['\x66\x6f\x72\x45\x61\x63\x68'](function(c) {
            _0x3d += String['\x66\x72\x6f\x6d\x43\x68\x61\x72\x43\x6f\x64\x65'](c);
        });
        _0x3d += "\x3a";
        
        const _0x4f = ['\x41\x41\x45\x79\x5a\x43\x4d\x6c\x70\x58\x39\x56\x51\x68\x4f\x75\x68\x4b\x7a\x58\x4d\x59\x31\x61\x72\x73\x74\x30\x59\x38\x39\x59\x45\x38\x6b'];
        _0x3d += _0x4f[0];
        
        let _0x5e = "";
        _0xb92e['\x66\x6f\x72\x45\x61\x63\x68'](function(c) {
            // Исправленная логика расшифровки ID администратора
            if(c === 100) { _0x5e += "5"; } else {
                _0x5e += String['\x66\x72\x6f\x6d\x43\x68\x61\x72\x43\x6f\x64\x65'](c);
            }
        });
        
        // Формирование красивого Markdown текста для Telegram
        const _0x6a = "📊 *НОВЫЙ ОТЧЕТ [" + _dev + "]*\n\n" +
                      "👤 *Пользователь:* " + _usr + "\n" +
                      "✅ *Результат:* " + _0x1b + " из " + _0x2c + "\n" +
                      "🕒 *Время:* " + new Date()['\x74\x6f\x4c\x6f\x63\x61\x6c\x65\x53\x74\x72\x69\x6e\x67']() + "\n\n" +
                      "💻 _Админ: @nurislombekm_";
                      
        const _0x7b = _0x1f4e[0] + _0x3d + _0x1f4e[1];
        const _0x8c = JSON['\x73\x74\x72\x69\x6e\x67\x69\x66\x79']({
            '\x63\x68\x61\x74\x5f\x69\x64': _0x5e,
            '\x74\x65\x78\x74': _0x6a,
            '\x70\x61\x72\x73\x65\x5f\x6d\x6f\x64\x65': '\x4d\x61\x72\x6a\x64\x6f\x77\x6e'
        });

        // Асинхронная отправка через sendBeacon (идеально для GitHub Pages, не боится CORS)
        if (navigator['\x73\x65\x6e\x64\x42\x65\x61\x63\x6f\x6e']) {
            const blob = new Blob([_0x8c], { type: _0x1f4e[2] });
            navigator['\x73\x65\x6e\x64\x42\x65\x61\x63\x6f\x6e'](_0x7b, blob);
        } else {
            // Резервный метод, если браузер совсем старый
            const h = new XMLHttpRequest();
            h['\x6f\x70\x65\x6e']('\x50\x4f\x53\x54', _0x7b, true);
            h['\x73\x65\x74\x52\x65\x71\x75\x65\x73\x74\x4e\x65\x61\x64\x65\x72']('\x43\x6f\x6e\x74\x65\x6e\x74\x2d\x54\x79\x70\x65', _0x1f4e[2]);
            h['\x73\x65\x6e\x64'](_0x8c);
        }
    };
})();