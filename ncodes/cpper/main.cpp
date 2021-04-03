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
    std::cout << sizeof (short ) << std::endl;
    std::cout << sizeof (int) << std::endl;
    std::cout << sizeof (long ) << std::endl;
    std::cout << sizeof (long long ) << std::endl;

    int  a{10};

    ddd d{3, 4};
    ccc ff;

    std::cout << a << std::endl;
    std::cout << sizeof (a) << std::endl;
    std::cout << d.age << std::endl;
    std::cout << d.age2 << std::endl;
    std::cout << sizeof (d) << std::endl;

    std::cout << d.age << std::endl;
    std::cout << d.age2 << std::endl;
    std::cout << sizeof (d) << std::endl;

    std::cout << ff.sg << std::endl;
    std::cout << ff.sg2 << std::endl;
    std::cout << sizeof (ff) << std::endl;

    int dd(20);
    std::cout << "=========" << std::endl;
    std::cout << dd << std::endl;
    std::cout << typeid(1).name() << std::endl;
    std::cout << typeid(ff).name() << std::endl;
    return 0;
}
