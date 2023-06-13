export default function NaiveSetTheory() {
  return (
    <div class="p-20px max-w-950px">
      <h-4>1. 异或</h-4>
      <m-b m="(A \\cap \\overline{B}) \\cup (\\overline{A} \\cap B) = (A \\cup B) \\cap (\\overline{A} \\cup \\overline{B})"></m-b>
      <h-4>2. 同或</h-4>
      <m-b m="(A \\cap B) \\cup (\\overline{A} \\cap \\overline{B}) = (A \\cup \\overline{B}) \\cap (\\overline{A} \\cup B)"></m-b>
      <h-4>3. 广义并交</h-4>
      <m-b m="A \\sube B \\implies \\cup A \\sube \\cup B"></m-b>
      <m-b m="A \\sube B \\implies \\cap B \\sube \\cap A"></m-b>
      <m-b m="\\cup (A \\cup B) = (\\cup A) \\cup (\\cup B)"></m-b>
      <m-b m="\\cap (A \\cup B) = (\\cap A) \\cap (\\cap B)"></m-b>
      <m-b m="\\cup (P(S)) = A"></m-b>
      <h-4>4. 传递集合</h-4>
      <h-6>4.1 定义:</h-6>
      <m-b m="T(S) \\iff (\\forall x) (\\forall y)((x \\in y \\land y \\in S) \\to x \\in S)"></m-b>
      <h-6>4.2 性质:</h-6>
      <m-b m="T(S) \\iff \\cup S \\sube S \\sube P(S)"></m-b>
      <m-b m="T(\\cup S) \\iff T(S) \\iff T(P(S))"></m-b>
      <m-b m="\\forall x(x \\in S \\to T(x)) \\implies T(\\cup S)"></m-b>
      <h-4>5. 关系</h-4>
      <h-6>自反: </h-6>
      <m-b m="R是S中的自反关系 \\iff (\\forall x)(x \\in S \\to xRx)"></m-b>
      <m-b m="R是S中的反自反关系 \\iff (\\forall x)(x \\in S \\to x\\cancel{R} x)"></m-b>
      <h-6>对称: </h-6>
      <m-b m="R是S中的对称关系 \\iff (\\forall x)(\\forall y)((x \\in S \\land y \\in S \\land xRy) \\to yRx)"></m-b>
      <m-b m="R是S中的反对称关系 \\iff (\\forall x)(\\forall y)((x \\in S \\land y \\in S \\land xRy \\land yRx) \\to x = y)"></m-b>
      <h-6>传递: </h-6>
      <m-b m="R是S中的传递关系 \\iff (\\forall x)(\\forall y)(\\forall z)((x \\in S \\land y \\in S \\land z \\in S \\land xRy \\land yRz) \\to xRz)"></m-b>
      <h-6>等价关系(自反的, 对称的, 传递的)与划分</h-6>
      <h-6>相容关系(自反的, 对称的)和覆盖</h-6>
      <h-6>偏序关系(自反的, 反对称的, 传递的)</h-6>
      <h-4>6. 偏序</h-4>
      <h-6>选择公理 AC1:</h-6>
      <m-b m="(\\forall F)(\\forall x)(x \\in F \\land (\\exist y)(y \\in x) \\implies (\\exist f)(f(x) \\in x))"></m-b>
      <h-6></h-6>
      <h-6>良序定理</h-6>
      <p>M1 库拉托夫斯基-左恩引理</p>
      <p>
        M2: F是一集族, 如果F的每一个链的并集仍是F的元素,
        则F有关于包含关系的极大元
      </p>
      <p>M3 图基引理</p>
      <h-6>极大原理</h-6>
      <h-6></h-6>
    </div>
  );
}
