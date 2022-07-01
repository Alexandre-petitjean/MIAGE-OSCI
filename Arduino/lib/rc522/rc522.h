#ifndef RC522_H
#define RC522_H

class rc522
{
private:
    /* data */
public:
    rc522(/* args */);
    ~rc522();
};

rc522::rc522(/* args */)
{
    void loadConstants();
    void readCard();
}

rc522::~rc522()
{
}
#endif