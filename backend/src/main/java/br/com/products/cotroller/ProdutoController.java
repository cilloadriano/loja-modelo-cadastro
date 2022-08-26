package br.com.products.cotroller;

//import vitals
import java.util.List;
import org.springframework.web.bind.annotation.*;
import java.util.stream.Collectors;
import org.springframework.beans.factory.annotation.Autowired;

//import components
import br.com.products.cotroller.dto.ProdutoRq;
import br.com.products.cotroller.dto.ProdutoRs;
import br.com.products.model.Produto;
import br.com.products.repository.ProdutoCustomRepository;
import br.com.products.repository.ProdutoRepository;

@RestController
@RequestMapping("/produto")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class ProdutoController {

    @Autowired
    private ProdutoRepository produtoRepository;

    @Autowired
    private ProdutoCustomRepository produtoCustomRepository;

    @GetMapping
    @CrossOrigin(origins = "*")
    public List<ProdutoRs> findAll() {
        List<Produto> produtos = produtoRepository.findAll();
        return produtos
                .stream()
                .map(ProdutoRs::converter)
                .collect(Collectors.toList());
    }

    @GetMapping("/name/{nome}")
    @CrossOrigin(origins = "*")
    public List<ProdutoRs> findByName(@PathVariable String nome) {
        List<Produto> produto = produtoRepository.findByNomeProdStartingWith(nome);
        return produto
                .stream()
                .map(ProdutoRs::converter)
                .collect(Collectors.toList());
    }

    @GetMapping("/{id}")
    public ProdutoRs findById(@PathVariable("id") Long id) {
        var produto = produtoRepository.getById(id);
        return ProdutoRs.converter(produto);
    }

    @PostMapping
    @CrossOrigin(origins = "*", allowedHeaders = "*")
    public void savePerson(@RequestBody ProdutoRq produto) {
        var p = new Produto();
        p.setNomeProd(produto.getNomeProd());
        p.setValorProd(produto.getValorProd());
        p.setDescProd(produto.getDescProd());
        produtoRepository.save(p);
    }

    @PutMapping("/{id}")
    public void updatePerson(@PathVariable("id") Long id, @RequestBody ProdutoRq produto) throws Exception {
        var p = produtoRepository.findById(id);

        if (p.isPresent()) {
            var produtoSave = p.get();
            produtoSave.setNomeProd(produto.getNomeProd());
            produtoSave.setDescProd(produto.getDescProd());
            produtoSave.setValorProd(produto.getValorProd());
            produtoRepository.save(produtoSave);
        } else {
            throw new Exception("Produto Não Encontrado");
        }
    }

    @DeleteMapping("/{id}")
    public void deletePerson(@PathVariable("id") Long id) throws Exception {
        var c = produtoRepository.findById(id);

        if (c.isPresent()) {
            produtoRepository.delete(c.get());
        } else {
            throw new Exception("Produto Não encontrada");
        }
    }

    @GetMapping("/filter/custom")
    public List<ProdutoRs> findPersonByCustom(
            @RequestParam(value = "id", required = false) Long id,
            @RequestParam(value = "nomeProd", required = false) String nomeProd,
            @RequestParam(value = "descProd", required = false) String descProd,
            @RequestParam(value = "valorProd", required = false) Float valorProd) {
        return this.produtoCustomRepository.find(id, nomeProd, descProd, valorProd)
                .stream()
                .map(ProdutoRs::converter)
                .collect(Collectors.toList());
    }

}
