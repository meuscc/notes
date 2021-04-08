#include <iostream>

struct ddd {
  int age;
  int age2;
};

class ccc {
 public:
  int sg = 9;
  int sg2 = 4;
};

int main() {
  std::cout << "Hello, World!" << std::endl;
  std::cout << sizeof(short) << std::endl;
  std::cout << sizeof(int) << std::endl;
  std::cout << sizeof(long) << std::endl;
  std::cout << sizeof(long long) << std::endl;

  int a{10};

  ddd d{3, 4};
  ccc ff;

  std::cout << a << std::endl;
  std::cout << sizeof(a) << std::endl;
  std::cout << d.age << std::endl;
  std::cout << d.age2 << std::endl;
  std::cout << sizeof(d) << std::endl;

  std::cout << d.age << std::endl;
  std::cout << d.age2 << std::endl;
  std::cout << sizeof(d) << std::endl;

  std::cout << ff.sg << std::endl;
  std::cout << ff.sg2 << std::endl;
  std::cout << sizeof(ff) << std::endl;

  int dd(20);
  std::cout << "=========" << std::endl;
  std::cout << dd << std::endl;
  std::cout << typeid(1).name() << std::endl;
  std::cout << typeid(ff).name() << std::endl;

  std::cout << "=========" << std::endl;

  const char *str1 = "A";
  const char *str2 = "中";
  char str3[] = "𐐷𤭢中国";
  char c1 = 'A';
  char c2 = '中';

  std::cout << str1 << sizeof(&str1) << strlen(str1) << std::endl;
  std::cout << str2 << sizeof(&str2) << strlen(str2) << std::endl;
  std::cout << str3 << sizeof(&str3) << strlen(str3) << std::endl;
  std::cout << c1 << sizeof(c1) << std::endl;
  std::cout << "d:" << sizeof(c2) << std::endl;
  std::cout << "d2:" << str3[0] << std::endl;
  std::cout << "d2:" << (sizeof(str3) / sizeof(*str3)) << std::endl;


}
