# Automação Classe A — Convenções do projeto

## Regras obrigatórias

### Microsoft Clarity em todas as páginas
Toda página HTML criada neste projeto **precisa obrigatoriamente** incluir o
script de monitoramento do Microsoft Clarity no `<head>` (de preferência logo
após as `<meta>` iniciais / pixels existentes).

ID do projeto Clarity: `x0du2dtl62`

Snippet a ser inserido:

```html
<!-- Microsoft Clarity -->
<script type="text/javascript">
    (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "x0du2dtl62");
</script>
<!-- End Microsoft Clarity -->
```

Ao revisar uma página existente sem o snippet, adicioná-lo.
