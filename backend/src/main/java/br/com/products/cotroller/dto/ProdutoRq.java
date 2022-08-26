package br.com.products.cotroller.dto;

public class ProdutoRq {
   
    private Long id;
    private String nomeProd;
    private String descProd;
    private float valorProd;
    
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

    public void setValorProd(float valorProd ) {
        this.valorProd = valorProd;
    }
    
}
