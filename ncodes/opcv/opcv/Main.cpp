#include <iostream>
#include <opencv2/opencv.hpp>

using namespace cv;
using namespace std;

int main(int args, char** argv) {
  Mat src =
      imread("C:/Users/ysh35/Pictures/Saved Pictures/1.png", IMREAD_GRAYSCALE);
  if (src.empty()) {
    printf("could not load image");
    return -1;
  }

  namedWindow("���봰��", WINDOW_FREERATIO);
  imshow("���봰��", src);

  waitKey(0);
  return 0;
}