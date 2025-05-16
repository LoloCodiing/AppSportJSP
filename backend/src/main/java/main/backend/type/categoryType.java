package main.backend.type;

public enum categoryType {
    TOP14("Top 14"),
    PROD2("Pro D2"),
    NATIONALE("Nationale"),
    NATIONALE2("Nationale 2"),
    FEDERALE1("Federale 1"),
    FEDERALE2("Federale 2"),
    FEDERALE3("Federale 3"),
    REGIONALE1("Regionale 1"),
    REGIONALE2("Regionale 2"),
    REGIONALE3("Regionale 3");

    private final String label;

    categoryType(String label) {
        this.label = label;
    }

    public String getLabel() {
        return label;
    }
}
