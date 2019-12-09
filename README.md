
# Download com barra de progresso

Olá gente, mais um estudo aonde eu trago para vocês uma barra de progresso no download de um arquivo.
 ![](https://raw.githubusercontent.com/agencia-feats/download-progress-bar/master/previews/001.png)

A função é bem simples:

		downloadFile({
			typeSend: "GET",
			file: './file.test',
			newfile: 'file.test',
			abort: function() {console.log('abort');},
			error: function() {console.log('error');},
			load: function() {console.log('load');},
			finish: function() {console.log('finish');},
			progress: function(e) {
				console.log(e+'%')
				$('.progress-bar').css({width:e+'%'}).text(e+'%')
			}
		});

### Legenda

| Tipo | Descrição |
|--|--|
| typeSend | Esse é o method POST/GET |
| file | URL do arquivo a ser baixado |
| newfile |Novo nome que será salvo no computador  |
| abort | Função que será executada ao abortar  |
|error  | Função que será executada quando tiver erro|
|load  | Função que será executada ao iniciar |
|finish | Função que será executada ao finalizar|
|progress| Retorna a porcentagem do download |