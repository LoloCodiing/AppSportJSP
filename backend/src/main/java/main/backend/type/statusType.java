package main.backend.type;

public enum statusType {
    A_VENIR("A venir"),
    EN_COURS("En cours"),
    TERMINE("Terminé");

    private final String label;

    statusType(String label) {
        this.label = label;
    }

    public String getLabel() {
        return label;
    }
}

