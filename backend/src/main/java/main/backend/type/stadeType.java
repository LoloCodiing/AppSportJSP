package main.backend.type;

public enum stadeType {
    PARIS("Paris"),
    LYON("Lyon"),
    TOULOUSE("Toulouse"),
    BORDEAUX("Bordeaux"),
    PAU("Pau"),
    TOULON("Toulon"),
    ROCHELLE("La Rochelle");

    private final String label;

    stadeType(String label) {
        this.label = label;
    }

    public String getLabel() {
        return label;
    }
}
