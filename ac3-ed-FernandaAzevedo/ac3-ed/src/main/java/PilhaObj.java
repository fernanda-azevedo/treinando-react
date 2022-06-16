public class PilhaObj<T> {

    // Atributos
    private T[] pilha;
    private int topo;

    // Construtor
    public PilhaObj(int capacidade) {
        pilha = (T[]) new Object[capacidade];
        topo = -1;
    }

    // Métodos
    public Boolean isEmpty() {
        return this.topo == -1;
    }

    public Boolean isFull() {
        return topo == pilha.length-1;
    }

    public void push(T info) {
        if (isFull()) {
            System.out.println("Pilha cheia!");
        } else {
            this.pilha[++topo] = info;
        }
    }

    public T pop() {
        if (isEmpty()) {
            return null;
        }
        return this.pilha[this.topo--];
    }

    public T peek() {
        if (isEmpty()) {
            return null;
        }
        return this.pilha[this.topo];
    }

    public void exibe() {
        if (this.isEmpty()) {
            System.out.println("Pilha vazia");
        } else {
            for (int i = this.topo; i >= 0; i--) {
                System.out.print(this.pilha[i]);
            }
        }
    }

//Fiz os getters e setters da pilha para se caso precisar usar
    public T[] getPilha() {
        return pilha;
    }

    public void setPilha(T[] pilha) {
        this.pilha = pilha;
    }

    public int getTopo() {
        return topo;
    }

    public void setTopo(int topo) {
        this.topo = topo;
    }
}