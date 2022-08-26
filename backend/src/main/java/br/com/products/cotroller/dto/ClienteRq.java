package br.com.products.cotroller.dto;

public class ClienteRq {
   
    private Long id;
    private String nomeCli;
    private String endCli;
    private float limiteCred;
    private float limiteParc;
    
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNomeCli() {
        return nomeCli;
    }

    public void setNomeCli(String nomeCli) {
        this.nomeCli = nomeCli;
    }
    
    public String getEndCli() {
        return endCli;
    }

    public void setEndCli(String endCli) {
        this.endCli = endCli;
    }
    
    public float getLimiteCred() {
        return limiteCred;
    }

    public void setLimiteCred(float limiteCred ) {
        this.limiteCred = limiteCred;
    }
    
    public float getLimiteParc() {
        return limiteParc;
    }

    public void setLimiteParc(float limiteParc ) {
        this.limiteParc = limiteParc;
    }
    
    
}
