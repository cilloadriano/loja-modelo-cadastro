package br.com.products.cotroller.dto;

//import components
import br.com.products.model.Produto;

public class ProdutoRs {

    private Long id;
    private String nomeProd;
    private String descProd;
    private float valorProd;

    public static ProdutoRs converter(Produto p) {
        var produto = new ProdutoRs();
        produto.setId(p.getId());
        produto.setNomeProd(p.getNomeProd());
        produto.setDescProd(p.getDescProd());
        produto.setValorProd(p.getValorProd());
        return produto;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNomeProd() {
        return nomeProd;
    }

    public void setNomeProd(String nomeProd) {
        this.nomeProd = nomeProd;
    }

    public String getDescProd() {
        return descProd;
    }

    public void setDescProd(String descProd) {
        this.descProd = descProd;
    }

    public float getValorProd() {
        return valorProd;
    }

    public void setValorProd(float valorProd) {
        this.valorProd = valorProd;
    }

}
