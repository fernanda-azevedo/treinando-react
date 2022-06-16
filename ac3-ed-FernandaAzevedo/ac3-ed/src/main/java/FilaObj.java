public class FilaObj<T> {

    private int tamanho;
    private T[] fila;

    public FilaObj(int capacidade) {
        this.tamanho = 0;
        this.fila = (T[]) new Object[capacidade];
    }

    public boolean isEmpty() {
        if (this.tamanho == 0) {
            return true;
        }
        return false;
    }


    public boolean isFull() {
        if (this.tamanho == this.fila.length) {
              throw new IllegalArgumentException("Fila cheia");
        }
        return false;
    }

    public void insert(T info) {
        if (isFull()) {
            System.out.println("Fila cheia");
        } else {
            this.fila[tamanho++] = info;
        }
    }
    public T peek() {
        return this.fila[0];
    }

    public T poll() {
        T primeiro = peek();

        if (!isEmpty()) {
            for (int i = 0; i < tamanho - 1; i++) {
                fila[i] = fila[i + 1];
            }
            fila[tamanho - 1] = null;
            tamanho--;
        }
        return primeiro;
    }

    public void exibe() {
        if (isEmpty()) {
            System.out.println("Fila vazia!");
        } else {
            for (int i = 0; i < this.tamanho; i++) {
                System.out.println(this.fila[i]);
            }
        }
    }

    public int getTamanho() {
        return tamanho;
    }

    public void setTamanho(int tamanho) {
        this.tamanho = tamanho;
    }

    public void setFila(T[] fila) {
        this.fila = fila;
    }

    public T[] getFila() {
        return null;
    }
}